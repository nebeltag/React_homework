import { ADD_CHAT, REMOVE_CHAT } from "./chatsActions";


const initialState = {
  chatList: [
    {
      id: 'Hogwarts',
      name: "Hogwarts Magic Scool",
    },
    {
      id: 'Harry',
      name: "Harry Potter",
    },
    {
      id: 'Hermiona',
      name: "Hermiona Granger",
    },
    {
      id: 'Ron',
      name: "Ron Wisley",
    },
    {
      id: 'Voldemort',
      name: "Lord Voldemort",
    },
    {
      id: 'Belatrix',
      name: "Belatrix LeStrange",
    },
    {
      id: 'Snag',
      name: "Prof.Severus Snag",
    },
  ]
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
    case REMOVE_CHAT:
      return {
        chatList: [state.chatList.filter(el => el.id !== action.chatId)]
      }
    default:
      return state;
  }
};

export default chatsReducer;
