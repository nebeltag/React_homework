import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Header from '../Header/Header.jsx';

export default class Home extends Component {

  render() {
    let message = 'Homepage';
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