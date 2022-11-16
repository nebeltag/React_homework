import React from "react";
import './style.css';
import PropTypes from 'prop-types';

export default class Message extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    return <>
      <div>{this.props.sender}:  {this.props.text}</div>

    </>
  }
}

// export default Message;