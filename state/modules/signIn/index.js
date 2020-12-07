import { AsyncStorage } from 'react-native';
import { USER_LOGIN, USER_PASS, USER_TOKEN } from '../../../storageKeys';

export const LOGOUT = 'signIn/LOGOUT';

export const LOGIN = 'signIn/LOGIN';
export const LOGIN_SUCCESS = 'signIn/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'signIn/LOGIN_FAIL';

export const SILENT_LOGIN = 'signIn/SILENT_LOGIN';
export const SILENT_LOGIN_SUCCESS = 'signIn/SILENT_LOGIN_SUCCESS';
export const SILENT_LOGIN_FAIL = 'signIn/SILENT_LOGIN_FAIL';

export const ADD_FORM_FIELD = 'signIn/ADD_FORM_FIELD';

const initialState = {
  loading: false,
  username: '',
  mobile: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const actionHandlers = {

  async [LOGOUT](state) {
    await AsyncStorage.removeItem(USER_TOKEN);
    await AsyncStorage.removeItem(USER_LOGIN);
    await AsyncStorage.removeItem(USER_PASS);
    return {
      ...state,
      loading: false,
    };
  },

  [LOGIN](state) {
    return {
      ...state,
      loading: true,
    };
  },
  [LOGIN_SUCCESS](state, action) {
    AsyncStorage.setItem(USER_TOKEN, action.payload.data.access_token);
    return {
      ...state,
      loading: false,
    };
  },
  [LOGIN_FAIL](state, action) {
    AsyncStorage.removeItem(USER_TOKEN);
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  },

  [SILENT_LOGIN](state) {
    return {
      ...state,
      loading: true,
    };
  },
  async [SILENT_LOGIN_SUCCESS](state, action) {
    await AsyncStorage.setItem(USER_TOKEN, action.payload.data.access_token);
    return {
      ...state,
      loading: false,
    };
  },
  async [SILENT_LOGIN_FAIL](state, action) {
    await AsyncStorage.removeItem(USER_TOKEN);
    await AsyncStorage.removeItem(USER_LOGIN);
    await AsyncStorage.removeItem(USER_PASS);
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  },

  [ADD_FORM_FIELD](state, action) {
    return {
      ...state,
      loading: false,
      [action.payload.name]: action.payload.value,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }

  return state;
}

export const login = user => ({
  types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
  payload: {
    request: {
      method: 'post',
      url: '/auth/token',
      data: { login: user.login, password: user.password },
    },
  },
});

export const silentLogin = user => ({
  types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
  payload: {
    request: {
      method: 'post',
      url: '/auth/token',
      data: { login: user.login, password: user.password },
    },
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const addFormField = payload => ({
  type: ADD_FORM_FIELD,
  payload,
});
