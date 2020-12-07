import reducer, {
  LOAD_ME,
  LOAD_ME_SUCCESS,
  LOAD_ME_FAIL,
} from './index';

describe('masterProfile reducer', () => {
  describe('LOAD_ME action', () => {
    it('sets loading to true', () => {
      const actual = reducer(null, { type: LOAD_ME });
      expect(actual).toMatchObject({ loading: true });
    });
  });
  describe('LOAD_ME_SUCCESS action', () => {
    it('sets loading to false and user to payload', () => {
      const user = { name: 'bob' };
      const actual = reducer(null, { type: LOAD_ME_SUCCESS, payload: { data: user } });
      expect(actual).toMatchObject({ loading: false, user });
    });
  });
  describe('LOAD_ME_FAIL action', () => {
    it('sets loading to false and error to payload', () => {
      const error = { description: 'foo!' };
      const actual = reducer(null, { type: LOAD_ME_FAIL, error });
      expect(actual).toMatchObject({ loading: false, error });
    });
  });
});
