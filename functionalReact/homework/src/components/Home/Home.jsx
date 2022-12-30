import React from 'react';
import logo from './logo.svg';
import './style.css';
import Header from '../Header/Header.jsx';

export default function Home(props) {


  let pageTitle = 'Homepage';
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    </div>
  )

}