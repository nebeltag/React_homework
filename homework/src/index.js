import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Message from './Message';
import reportWebVitals from './reportWebVitals';

const myName = 'Maxim';
const showRed = true;
// const message = 'Hello, I am message from index.js!';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={myName} showRed={showRed} />
    {/* <Message message={message} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

