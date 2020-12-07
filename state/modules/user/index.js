export const LOAD_ME = 'masterProfile/LOAD_ME';
export const LOAD_ME_SUCCESS = 'masterProfile/LOAD_ME_SUCCESS';
export const LOAD_ME_FAIL = 'masterProfile/LOAD_ME_FAIL';

const initialState = {
  loading: false,
  user: {
    name: '',
  },
};

const actionHandlers = {
  [LOAD_ME](state) {
    return { ...state, loading: true };
  },
  [LOAD_ME_SUCCESS](state, action) {
    const newState = { ...state, loading: false, user: action.payload.data };
    return newState;
  },
  [LOAD_ME_FAIL](state, action) {
    return { ...state, loading: false, error: action.error };
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

export function loadMe() {
  return {
    types: [LOAD_ME, LOAD_ME_SUCCESS, LOAD_ME_FAIL],
    payload: {
      request: {
        url: 'users/me',
      },
    },
  };
}
