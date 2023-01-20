import { ADD_MESSAGE, ADD_NEW_MESSAGE_LIST } from "./messagesActions.js";

const initialState = {
  messageList: {
    'Hogwarts':
      [{ text: "Welcome to Hogwarts Chatroom!", sender: 'Hogwarts' }],

    'Harry':
      [{ text: "Hello, i am Harry!", sender: 'Harry' }],

    'Hermiona':
      [{ text: "Hello, i am Hermiona!", sender: 'Hermiona' }],

    'Ron':
      [{ text: "Hello, i am Ron!", sender: 'Ron' }],

    'Voldemort':
      [{ text: "Hello, i am a Black Lord!", sender: 'Voldemort' }],

    'Belatrix':
      [{ text: "Hello, i am Belatrix!", sender: 'Belatrix' }],

    'Snag':
      [{ text: "Hello, i am prof.Snag!", sender: 'Snag' }],
  }
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            {
              ...action.message,
              id: `${action.chatId}${currentList.length}`,
            },
          ],
        },
      };
    }

    case ADD_NEW_MESSAGE_LIST: {
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.newChatId]: [
            { text: `Hi! I am ${action.newChatName}`, sender: action.newChatName }
          ]
        }
      }
    }
    default:
      return state;
  }
};

export default messagesReducer;
