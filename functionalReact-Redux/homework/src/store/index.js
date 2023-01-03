import { combineReducers } from "redux";
import profileReducer from "./reducers/profileReducer.js";

const rootReducer = combineReducers({
  profile: profileReducer
})

export default rootReducer