import React from 'react';
import Header from '../Header/Header.jsx';
import ChatList from '../ChatList/ChatList.jsx';

const NoChat = (props) => {
  const selectChat = 'Please select a chat'
  const { chats } = props;
  return (
    <>
      <Header selectChat={selectChat} />
      <ChatList chats={chats} />
    </>
  );
}

export default NoChat;