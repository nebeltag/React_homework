export let SEND_MSG = '@@message/SEND';
export let DELETE_MSG = '@@message/DELETE';

export let sendMessage = (messageId, sender, text) => ({
  type: SEND_MSG,
  messageId,
  sender,
  text
});
export let deleteMessage = (myId, id) => ({
  type: DELETE_MSG,
  myId,
  id

});