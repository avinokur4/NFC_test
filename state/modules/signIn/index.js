import { AsyncStorage } from 'react-native';
import { TAG_UUID } from '../../../storageKeys';

export const LOGOUT = 'signIn/LOGOUT';

export const LOGIN = 'signIn/LOGIN';
export const LOGIN_SUCCESS = 'signIn/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'signIn/LOGIN_FAIL';

export const ADD_FORM_FIELD = 'signIn/ADD_FORM_FIELD';

const initialState = {
  loading: false,
  tagUuid: '',
};

const actionHandlers = {

  async [LOGOUT](state) {
    await AsyncStorage.removeItem(TAG_UUID);
    return {
      ...state,
      loading: false,
    };
  },

  [LOGIN](state) {
  console.log(LOGIN);
    return {
      ...state,
      loading: true,
    };
  },
  [LOGIN_SUCCESS](state, action) {
    console.log(LOGIN_SUCCESS);
    AsyncStorage.setItem(TAG_UUID, action.payload.data.tagUuid);
    return {
      ...state,
      tagUuid: action.payload.data.tagUuid,
      loading: false,
    };
  },
  [LOGIN_FAIL](state, action) {
    console.log(LOGIN_FAIL);
    AsyncStorage.removeItem(TAG_UUID);
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
