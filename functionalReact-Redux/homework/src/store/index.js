import { combineReducers } from "redux";
import profileReducer from "./Profile/profileReducer.js";
import chatsReducer from "./Chats/chatsReducer.js";
import messagesReducer from "./Messages/messagesReducer.js";

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer
})

export default rootReducer