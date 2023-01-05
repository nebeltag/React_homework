import { ADD_CHAT } from "./chatsActions";

const initialState = {
  chatList: [],
}

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: `id${state.chatList.length}`,
            name: action.name,
          }
        ]
      };
    default:
      return state;
  }
};

export default chatsReducer;
