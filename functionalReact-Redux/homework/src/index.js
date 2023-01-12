import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import bootstrap from 'bootstrap';
import Router from './router.jsx';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { persistor } from './store/store.js';


// import Layout from './components/Layout/Layout.jsx';
// import App from './App';
// import Message from './Message';


// const myName = 'Maxim';
// const showRed = true;
// const message = 'Hello, I am message from index.js!';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}
    // loading={<CircularProgress />}
    >
      <BrowserRouter>

        {/* <Layout /> */}
        <Router />
        {/* <App name={myName} showRed={showRed} /> 
  <Message message={message} />  */}

      </BrowserRouter>
    </PersistGate>
  </Provider >
);


