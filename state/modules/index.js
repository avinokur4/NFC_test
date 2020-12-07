import { combineReducers } from 'redux';
import ordersFeed from './ordersFeed';
import user from './user';

export default combineReducers({
  ordersFeed,
  user,
});
