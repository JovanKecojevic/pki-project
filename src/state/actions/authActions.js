import * as ActionTypes from '../constants/actionTypes';
import {USER_LOGGED_IN, USER_NOT_LOGGED_IN} from "../constants/actionTypes";

/**
 * @namespace AuthActions
 * @category Actions
 */

/**
 * Creates action payload with user permissions to be set
 *
 * @see AuthReducer
 * @param {object} permissions - user permissions
 * @returns {{payload: *, type: string}} Action with a payload
 * @memberOf AuthActions
 * @alias setUserPermissions
 * @function
 */
export const setUserLoggedIn = permissions => ({
  type: ActionTypes.USER_LOGGED_IN,
  payload: permissions
});
