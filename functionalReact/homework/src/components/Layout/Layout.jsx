import React, { Component } from 'react';
import MessageField from '../MessageField/MessageField.jsx';
// import ChatList from '../ChatList/ChatList.jsx';
// import Header from '../Header/Header.jsx'
import './style.css';

// import PropTypes from 'prop-types';


export default class Layout extends Component {

  // static propTypes = {
  //   chatId: PropTypes.string
  // }

  // static defaultProps = {
  //   chatId: '1'
  // }

  render() {

    let { chatId } = this.props;
    let message = 'Chat Room';

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
}