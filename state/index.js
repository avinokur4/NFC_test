import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducer from './modules';
import API from './api';

export default function createStore(preloadedState) {

  const clients = {
    default: {
      client: API,
    },
  };

  const composeWithDevTools = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const interceptors = {
    request: [
      async ({ getState }, req) => {
        return {
           ...req,
        };
      }],
    response: [
      {
        success(object, req) {
          return Promise.resolve(req);
        },
        async error({ dispatch }, error) {
          if (error.message.trim() === 'Network Error') {
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
