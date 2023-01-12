import React from 'react';
import '../Header/style.css';
import '../Home/style.css';
import logo from '../Home/logo.svg'
import Header from '../Header/Header.jsx';



export default function Profile(props) {


  let pageTitle = 'Profile';

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    </div>
  )

}