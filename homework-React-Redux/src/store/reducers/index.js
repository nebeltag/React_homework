import { combineReducers } from "redux";
import profileReducer from '../profile/reducers/profile_reducer.js';
import msgReducer from './msg_reducer.js';

const rootReducer = combineReducers({ profileReducer, msgReducer })

export default rootReducer