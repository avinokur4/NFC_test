import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ADD_FORM_FIELD } from './index';

export const login = shortUrl => ({
  types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
  payload: {
    request: {
      method: 'post',
      url: 'authentication/nfc',
      data: { short_url: shortUrl },
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