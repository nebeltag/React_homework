import React, { Component } from 'react';
import '../Header/style.css';
import '../Home/style.css';
import logo from '../Home/logo.svg'
import Header from '../Header/Header.jsx';

export default class Profile extends Component {

  render() {

    let message = 'Profile';

    return (
      <div>
        <Header message={message} />
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
      </div>
    )
  }
}