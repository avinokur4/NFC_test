export const LOAD_ORDER = 'orderDetails/LOAD_ORDER';
export const LOAD_ORDER_SUCCESS = 'orderDetails/LOAD_ORDER_SUCCESS';
export const LOAD_ORDER_FAIL = 'orderDetails/LOAD_ORDER_FAIL';

export const CANCEL_ORDER = 'orderDetails/CANCEL_ORDER';
export const CANCEL_ORDER_SUCCESS = 'orderDetails/CANCEL_ORDER_SUCCESS';
export const CANCEL_ORDER_FAIL = 'orderDetails/CANCEL_ORDER_FAIL';

const initialState = {
  loading: false,
  order: {},
  loaded: false,
};

const actionHandlers = {
  [LOAD_ORDER](state) {
    return { ...state, loading: true, loaded: false };
  },
  [LOAD_ORDER_SUCCESS](state, action) {
    return { ...state, loading: false, order: action.payload.data, loaded: true };
  },
  [LOAD_ORDER_FAIL](state, action) {
    return { ...state, loading: false, error: action.error, loaded: false };
  },

  [CANCEL_ORDER](state) {
    return { ...state, loading: true, loaded: false };
  },
  [CANCEL_ORDER_SUCCESS](state) {
    return { ...state, loading: false, loaded: true };
  },
  [CANCEL_ORDER_FAIL](state, action) {
    return { ...state, loading: false, error: action.error, loaded: false };
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

export function getOrder(orderId) {
  return {
    types: [LOAD_ORDER, LOAD_ORDER_SUCCESS, LOAD_ORDER_FAIL],
    payload: {
      request: {
        url: `/customer/orders/${orderId}/details`,
      },
    },
  };
}

export function cancelOrder(orderId) {
  return {
    types: [CANCEL_ORDER, CANCEL_ORDER_SUCCESS, CANCEL_ORDER_FAIL],
    payload: {
      request: {
        method: 'PUT',
        url: `/orders/${orderId}/cancel`,
      },
    },
  };
}
