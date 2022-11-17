import React from "react";
import './style.css';
import PropTypes from 'prop-types';
import { Typography } from "@mui/material";


export default class Message extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {

    return (


      <Typography style={{ marginBottom: '15px' }}>

        <span className="sender">{this.props.sender}:</span>
        <span className="text">{this.props.text}</span>

      </Typography>




    )
  }
}

// export default Message;