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
  const chats = useSelector((state) => state.chats.chatList);
  // const [chats] = useState(chatList);
  // console.log(chatList);
  console.log(chats);

  let contains = chats.find((i) => i.id === chatId);
  console.log(contains);
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