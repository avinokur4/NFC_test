import { LOAD_ORDER, LOAD_ORDER_SUCCESS, LOAD_ORDER_FAIL } from './index';

export function getProduct(tagUuid) {
  return {
    types: [LOAD_ORDER, LOAD_ORDER_SUCCESS, LOAD_ORDER_FAIL],
    payload: {
      request: {
        url: `/identities/${tagUuid}/product/infos`,
      },
    },
  };
}