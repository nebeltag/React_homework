import { addMessage } from "../store/Messages/messagesActions.js";


export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
  dispatch(addMessage(chatId, message));
  if (message.sender !== 'Bot') {
    const botMessage = { text: 'Nice to see you', sender: 'Bot' };
    setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1000);
  }
}



