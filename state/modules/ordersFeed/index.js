export const LOAD_ORDERS = 'ordersFeed/LOAD_ORDERS';
export const LOAD_ORDERS_SUCCESS = 'ordersFeed/LOAD_ORDERS_SUCCESS';
export const LOAD_ORDERS_FAIL = 'ordersFeed/LOAD_ORDERS_FAIL';

export const RESET_ORDERS = 'ordersFeed/RESET_ORDERS';
export const ADD_ORDER = 'ordersFeed/ADD_ORDER';

export const CLEAR_ORDERS = 'oredrsFeed/CLEAR_ORDERS';

const initialState = {
  page: 1,
  loading: false,
  orders: [],
};

const actionHandlers = {
  [LOAD_ORDERS](state) {
    return {
      ...state,
      loading: true,
      page: 1,
    };
  },
  [LOAD_ORDERS_SUCCESS](state, action) {
    const orders = state.orders.concat(action.payload.data);
    const page = state.orders.length > 1 ? state.page + 1 : state.page;

    return {
      ...state,
      loading: false,
      orders,
      page,
    };
  },
  [LOAD_ORDERS_FAIL](state, action) {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  },

  [RESET_ORDERS](state, action) {
    const orders = action.payload.data;
    const page = 1;

    return {
      ...state,
      loading: false,
      orders,
      page,
    };
  },

  [CLEAR_ORDERS](state) {
    return {
      ...state,
      orders: [],
    };
  },
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  const { type } = action;
  const actionHandler = actionHandlers[type];
  if (actionHandler) {
    return actionHandler(state, action);
  }

  return state;
}

export const getOrders = (params = { page: 1, size: 10 }) => ({
  types: [LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_FAIL],
  payload: {
    request: {
      url: '/orders',
      params: { page: params.page, size: params.size },
    },
  },
});

export const updateOrders = (params = { page: 1, size: 10 }) => ({
  types: [LOAD_ORDERS, RESET_ORDERS, LOAD_ORDERS_FAIL],
  payload: {
    request: {
      url: '/orders',
      params: { page: params.page, size: params.size },
    },
  },
});

export const clearOrders = () => ({
  type: CLEAR_ORDERS
});
