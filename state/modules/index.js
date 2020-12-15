import { combineReducers } from 'redux';
import productDetails from './productDetails';
import signIn from './signIn';

export default combineReducers({
  productDetails,
  signIn,
});
