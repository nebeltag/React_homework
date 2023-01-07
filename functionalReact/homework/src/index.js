import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import bootstrap from 'bootstrap';
import Router from './router.jsx';

import { BrowserRouter } from 'react-router-dom';


// import Layout from './components/Layout/Layout.jsx';
// import App from './App';
// import Message from './Message';


// const myName = 'Maxim';
// const showRed = true;
// const message = 'Hello, I am message from index.js!';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    {/* <Layout /> */}
    <Router />
    {/* <App name={myName} showRed={showRed} /> 
  <Message message={message} />  */}
  </BrowserRouter>

);


