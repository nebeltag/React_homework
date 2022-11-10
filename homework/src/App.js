import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Message from './Message';
import MessagesList from './components/Message/MessagesList';



function App(props) {
  return (
    <div className="App">
      <header className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}>
        <img src={logo} className="App-logo" alt="logo" />

        My First React App
        <h1>Hello, {props.name}!</h1>
        <div style={{ paddingTop: '25px', fontSize: '50px', fontWeight: 'bold' }}>
          Inline Styles
        </div>
        <MessagesList />
        {/* <Message const appMessage={'Hello, I am a message from App.js!'} /> */}
      </header>
    </div >
  );
}

export default App;


