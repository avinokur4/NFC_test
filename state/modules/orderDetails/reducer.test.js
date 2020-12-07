import reducer, { LOAD_POST, LOAD_POST_FAIL } from './index';

describe('orderDetails reducer', () => {
  describe('LOAD_POST action', () => {
    it('sets loading to true', () => {
      const actual = reducer(null, { type: LOAD_POST });
      expect(actual).toMatchObject({ loading: true, loaded: false });
    });
  });
  describe('LOAD_POST_FAIL action', () => {
    it('sets loading to false and error to payload', () => {
      const error = { description: 'foo!' };
      const actual = reducer(null, { type: LOAD_POST_FAIL, error });
      expect(actual).toMatchObject({ loading: false, error, loaded: false });
    });
  });
});
