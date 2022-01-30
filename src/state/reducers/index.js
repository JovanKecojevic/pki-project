import { combineReducers } from 'redux';
import authReducer from './authReducer';

/**
 * @category State
 * @namespace Reducers
 */

export default combineReducers({
  authState: authReducer
});
