import { CHANGE_NAME } from './profileNameAction.js';


const defaultState = {
  profileName: ''


}

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {

    case CHANGE_NAME:
      return {
        ...state,
        profileName: action.payload
      }


    default:
      return state;
  }
};

export default profileReducer