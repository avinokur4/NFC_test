import { LOAD_PRODUCT, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL } from './index';

export const getProduct = tagUuid => ({
  types: [LOAD_PRODUCT, LOAD_PRODUCT_SUCCESS, LOAD_PRODUCT_FAIL],
  payload: {
    request: {
      url: `/identities/${tagUuid}/product/infos`,
    },
  },
});