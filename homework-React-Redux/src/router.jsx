import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Profile from './components/Profile/Profile.jsx'


export default class Router extends Component {

  render() {

    return (
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/chats/' element={<Layout />} exact />
        <Route path='/chats/Harry/' element={< Layout chatId={'Harry Potter'} />} />
        <Route path='/chats/Hermiona/' element={< Layout chatId={'Hermiona Granger'} />} />
        <Route path='/chats/Ron/' element={< Layout chatId={'Ron Wisley'} />} />
        <Route path='/chats/Voldemort/' element={< Layout chatId={'Lord Voldemort'} />} />
        <Route path='/chats/LeStrange/' element={< Layout chatId={'Belatrix LeStrange'} />} />
        <Route path='/chats/Snag/' element={< Layout chatId={'Prof. Severus Snag'} />} />
        <Route path='/profile/' element={<Profile />} exact />

      </Routes>

    )

  }
}