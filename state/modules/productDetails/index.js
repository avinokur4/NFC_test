export const LOAD_PRODUCT = 'productDetails/LOAD_PRODUCT';
export const LOAD_PRODUCT_SUCCESS = 'productDetails/LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCT_FAIL = 'productDetails/LOAD_PRODUCT_FAIL';

const initialState = {
  loading: false,
  product: {},
};

const actionHandlers = {
  [LOAD_PRODUCT](state) {
    return { ...state, loading: true };
  },
  [LOAD_PRODUCT_SUCCESS](state, action) {
    return { ...state, loading: false, product: action.payload.data };
  },
  [LOAD_PRODUCT_FAIL](state, action) {
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