export const ADD_MESSAGE = 'MESSAGES:ADD_MESSAGE';
export const ADD_NEW_MESSAGE_LIST = 'MESSAGES:ADD_NEW_MESSAGE_LIST'


export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message
});

export const addNewMessageList = (newChatId, newChatName) => ({
  type: ADD_NEW_MESSAGE_LIST,
  newChatId,
  newChatName
});