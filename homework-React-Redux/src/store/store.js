import { createStore } from 'redux';
import rootReducer from '../store/reducers/index.js';

export default function Store() {
  return createStore(rootReducer, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

// export default function initStore() {
//   return createStore(rootReduser, {})
// }