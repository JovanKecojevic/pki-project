import { applyMiddleware, createStore } from 'redux';
import { taskMiddleware } from 'react-palm/tasks';

import reducers from './reducers/index';

const mapResizeMiddleware = store => next => action => {
  if (action.type === 'RESIZE_MAP') {
    const map = store?.getState()?.mapState?.map;
    if (map) {
      map.resize();
    }
  }
  next(action);
};

let middleware = applyMiddleware(taskMiddleware, mapResizeMiddleware);


const store = createStore(reducers, middleware);

/**
 * Creates redux store from reducers and middleware
 *
 * @namespace Store
 * @category State
 * @alias Store
 */
export default store;
