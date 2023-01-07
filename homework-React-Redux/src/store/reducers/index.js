import { combineReducers } from "redux";
import profileReducer from '../profile/reducers/profile_reducer.js';
import msgReducer from './msg_reducer.js';

const rootReducer = combineReducers({
  profile: profileReducer,
  message: msgReducer
})

export default rootReducer