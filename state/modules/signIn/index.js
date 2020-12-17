export const LOGOUT = 'signIn/LOGOUT';

export const LOGIN = 'signIn/LOGIN';
export const LOGIN_SUCCESS = 'signIn/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'signIn/LOGIN_FAIL';

export const ADD_FORM_FIELD = 'signIn/ADD_FORM_FIELD';

const initialState = {
  loading: false,
  token: '',
};

const actionHandlers = {

  async [LOGOUT](state) {
    return {
      ...state,
      token: '',
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
    return {
      ...state,
      token: action.payload.data.data,
      loading: false,
    };
  },
  [LOGIN_FAIL](state, action) {
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
