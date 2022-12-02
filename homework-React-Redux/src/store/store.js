import { createStore } from 'redux';
import rootReduser from './profile/reducers/index.js';

export default function Store() {
  return createStore(rootReduser, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

// export default function initStore() {
//   return createStore(rootReduser, {})
// }