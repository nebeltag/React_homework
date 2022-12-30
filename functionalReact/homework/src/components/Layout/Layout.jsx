import React, { useState } from 'react';
import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx'
import { useParams, Navigate } from 'react-router-dom';
import initialChats from '../InitialChats/InitialChats.jsx';
import './style.css';


export default function Layout(props) {


  let pageTitle = 'Chat Room';
  console.log(props)

  const { chatId } = useParams();
  console.log(chatId);
  const [chats, setChats] = useState(initialChats);

  if (!chats[chatId]) {
    return <Navigate to="/NoChat/" />
  }


  return (
    <div className='layout' >
      <Header pageTitle={pageTitle}
        chatId={chatId} />
      <div className='main'>
        <MessageField
          chatId={chatId}
          messages={chats[chatId].messages}
        />
        <div className='chats'>
          <ChatList
            chats={chats}
            chatId={chatId}
          />
        </div>
      </div>
    </div >
  )

}