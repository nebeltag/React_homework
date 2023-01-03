import { EXAMPLE_ACTION } from '../actions/profileAction.js';


const defaultState = {
  showName: false,
  name: 'Default'

}

const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        showName: action.payload
      }

    default:
      return state;
  }
};

export default profileReducer