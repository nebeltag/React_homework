import React, { useState } from 'react';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx'
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import initialChats from '../InitialChats/InitialChats.jsx';
import './style.css';


export default function Layout(props) {


  let pageTitle = 'Chat Room';
  console.log(props)

  const { chatId } = useParams();
  console.log(chatId);
  const chatList = useSelector((state) => state.chats.chatList);
  const [chats] = useState(chatList);


  let contains = chats.find((i) => i.id === chatId);

  if (!contains) {
    return <Navigate to="/NoChat/" />
  }


  return (
    <div className='layout' >
      <Header pageTitle={pageTitle}
        chatId={chatId}
        name={contains.name}
      />
      <div className='main'>
        <MessageField
          chatId={chatId}
          name={contains.name}
        // messages={chats[chatId].messages}
        />
        <div className='chats'>
          <ChatList
            chats={chats}
            chatId={chatId}
            name={contains.name}
          />
        </div>
      </div>
    </div >
  )

}