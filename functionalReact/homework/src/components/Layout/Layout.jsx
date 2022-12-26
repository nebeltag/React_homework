import React from 'react';
import MessageField from '../MessageField/MessageField.jsx';
// import ChatList from '../ChatList/ChatList.jsx';
// import Header from '../Header/Header.jsx'
import './style.css';

// import PropTypes from 'prop-types';


export default function Layout() {

  // static propTypes = {
  //   chatId: PropTypes.string
  // }

  // static defaultProps = {
  //   chatId: '1'
  // }



  // let { chatId } = props;
  // let message = 'Chat Room';

  return (
    <div className='layout'>
      {/* <Header message={message}
          chatId={chatId} /> */}
      <div className='main'>
        <MessageField />
        <div className='chats'>
          {/* <ChatList /> */}
        </div>
      </div>
    </div>
  )

}