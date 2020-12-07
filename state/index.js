import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import reducer from './modules';
import API from './api';
import { silentLogin } from './modules/signIn';
import { USER_LOGIN, USER_PASS, USER_TOKEN } from '../storageKeys';

export default function createStore(preloadedState) {
  let INTERNET_RETRY_COUNTER = 0;

  const clients = {
    default: {
      client: API,
    },
  };

  const composeWithDevTools = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const interceptors = {
    request: [
      async ({ getState }, req) => {
        const token = await AsyncStorage.getItem(USER_TOKEN);
        return { ...req, headers: { Authorization: `Bearer ${token || ''}` } };
      }],
    response: [
      {
        success(object, req) {
          INTERNET_RETRY_COUNTER = 0;
          return Promise.resolve(req);
        },
        async error({ dispatch }, error) {
          if (error.message.trim() === 'Network Error') {
            return Promise.reject(error);
          }

          const { status } = error.response;
          if (status === 401 && INTERNET_RETRY_COUNTER < 3) {
            INTERNET_RETRY_COUNTER += 1;
            const login = await AsyncStorage.getItem(USER_LOGIN);
            const pass = await AsyncStorage.getItem(USER_PASS);

            if (login && pass) {
              return dispatch(silentLogin({ login, password: pass }))
                .then(async () => {
                  const newToken = await AsyncStorage.getItem(USER_TOKEN);
                  const { config } = error;
                  config.headers.Authorization = `Bearer ${newToken}`;

                  await dispatch(config.reduxSourceAction);

                  return Promise.reject(error);
                });
            }

            return Promise.reject(error);
          }

          return Promise.reject(error);
        },
      },
    ],
  };

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(thunk, multiClientMiddleware(clients, { interceptors })),
  );

  const store = _createStore(reducer, preloadedState, composedEnhancers);
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./modules/reducer', () => store.replaceReducer(reducer));
  }

  return store;
}
