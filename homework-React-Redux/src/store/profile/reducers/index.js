import { combineReducers } from "redux";
import profileReduser from './profile_reduser.js'

const rootReduser = combineReducers({ profileReduser })

export default rootReduser