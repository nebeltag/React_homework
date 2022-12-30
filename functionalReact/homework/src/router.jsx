import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx';
import PageNotFound from './components/404/404.jsx';
import NoChat from './components/NoChat/NoChat.jsx';
import initialChats from './components/InitialChats/InitialChats.jsx';



export default function Router(props) {

  const [chats, setChats] = useState(initialChats);

  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/chats/:chatId/' element={<Layout chats={chats} setChats={setChats} />} exact />
      {/* <Route path='/chats/:chatId/' element={<Layout chatId={'Hogwarts'} />} exact />
      <Route path='/chats/:chatId/' element={< Layout chatId={'Harry'} />} exact />
      <Route path='/chats/:chatId/' element={< Layout chatId={'Hermiona'} />} exact />
      <Route path='/chats/:chatId/' element={< Layout chatId={'Ron'} />} exact />
      <Route path='/chats/:chatId/' element={< Layout chatId={'Voldemort'} />} exact />
      <Route path='/chats/:chatId/' element={< Layout chatId={'Belatrix'} />} exact />
      <Route path='/chats/:chatId/' element={< Layout chatId={'Snag'} />} exact /> */}
      <Route path='/profile/' element={<Profile />} exact />
      <Route path='/page_not_found/' element={<PageNotFound />} exact />
      <Route path='*' element={<Navigate to="/page_not_found/" />} />
      <Route path='/NoChat/' element={<NoChat chats={chats} />} exact />
    </Routes>

  )


}