import update from "react-addons-update";
import { SEND_MSG } from "../actions/msg_action.js";



const defaultStore = {
  messages: {
    1: { sender: 'Bot', text: 'Hello!' },
    2: { sender: 'Bot', text: 'How are you?' }
  }
}

export default (store = defaultStore, action) => {

  switch (action.type) {
    case SEND_MSG: {
      let { messageId, sender, text } = action;
      return update(store, {
        messages: { $merge: { [messageId]: { sender, text } } }
      })
    }
    default:
      return store;
  }
}

