import * as ActionTypes from '../constants/actionTypes';

const intialState = {
  userLoggedIn: false
};

/**
 * Reducer - Authentication
 *
 * @param {object} state - initial or current state
 * @param {object} action - action object from which we extract action.type
 * @returns {object} changed state
 * @memberOf Reducers
 * @function
 */
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGGED_IN:
      return {
        ...state,
        userLoggedIn: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
