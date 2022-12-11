import update from "react-addons-update";
import { SET_NAME, CLEAR_INP } from '../actions/profile_action.js';



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
    case CLEAR_INP:
      let { value } = action;
      return update(
        value = ''
      )


    default:
      return store
  }
}


