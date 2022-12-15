import update from "react-addons-update";
import { SET_NAME } from '../actions/profile_action.js';



const defaultState = {
  profileName: ''
}

export default (store = defaultState, action) => {

  switch (action.type) {
    case SET_NAME:
      let { newProfileName } = action;
      return update(store, {
        $merge: { profileName: newProfileName }
      })


    default:
      return store
  }
}


