import update from "react-addons-update";
import { SEND_MSG, DELETE_MSG } from "../actions/msg_action.js";



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

    case DELETE_MSG: {
      let { myId } = action;
      let { messages } = store;
      let filteredKeys = Object.keys(messages).filter((el) => el !== myId);
      console.log(filteredKeys)

      for (const item in messages) {
        console.log(item)
      }



      return store


      // update(store, {
      //   messages: { $merge: { id, myId } }
      // })
    }
    default:
      return store;
  }
}

