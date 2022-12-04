import update from "react-addons-update";
import { CHANGE_NAME } from '../actions/profile_action.js'

const defaultState = {
  profile: '',

}

export default (store = defaultState, action) => {
  switch (action.type) {

    case CHANGE_NAME:
      return update(store, {
        $merge: { profile: 'Maxim' }
      })

    default:
      return store
  }
}


