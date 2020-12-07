// TODO: Rewrite reducer tests for orderFeed
import reducer, { LOAD_NEWS, LOAD_NEWS_SUCCESS, LOAD_NEWS_FAIL } from './index';
import newsFeed from '../../../api-mocks/newsFeed';

describe('newsReducer', () => {
  describe('LOAD_ME action', () => {
    it('sets loading to true', () => {
      const actual = reducer(null, { type: LOAD_NEWS });
      expect(actual).toMatchObject({ loading: true });
    });
  });
  describe('LOAD_ME_SUCCESS action', () => {
    it('sets loading to false and user to payload', () => {
      const posts = { data: newsFeed };
      const actual = reducer(null, { type: LOAD_NEWS_SUCCESS, payload: posts });
      expect(actual).toMatchObject({ loading: false, orders: posts.data });
    });
  });
  describe('LOAD_ME_FAIL action', () => {
    it('sets loading to false and error to payload', () => {
      const error = { description: 'foo!' };
      const actual = reducer(null, { type: LOAD_NEWS_FAIL, error });
      expect(actual).toMatchObject({ loading: false, error });
    });
  });
});
