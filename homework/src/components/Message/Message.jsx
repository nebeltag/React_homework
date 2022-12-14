import React from "react";
import './style.css';
import PropTypes from 'prop-types';
import { Typography, Chip, Avatar, Stack } from "@mui/material";


export default class Message extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const message = this.props.sender !== 'Bot' ?

      <Stack direction="row" spacing={1}
        style={{
          display: 'flex', flexDirection: 'column',
          alignItems: "flex-end"
        }}>
        <Chip
          avatar={<Avatar alt={this.props.sender}
            src="/broken-image.jpg"
          >
          </Avatar>}
          label={this.props.text}

          color="primary"
          className='sender'
        />
        {/* <span className="sender">{this.props.sender}</span>
        <span className="text">{this.props.text}</span> */}
      </Stack> :

      <Stack direction="row" spacing={1}
        style={{
          display: 'flex', flexDirection: 'column',
          alignItems: "flex-start"
        }}>
        <Chip
          avatar={<Avatar alt={this.props.sender}
            src="/broken-image.jpg"
          >
          </Avatar>}
          label={this.props.text}

          color="success"
          className='text'
        />
      </Stack>
    {/* <Typography style={{
            marginBottom: '15px', display: 'flex', flexDirection: 'column',
            alignItems: "flex-start"
          }}>

            <span className="sender">{this.props.sender}</span>
            <span className="text">{this.props.text}</span>

          </Typography> */}

    return (
      <div>
        {message}
      </div>

      // <Typography style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column' }}>

      //   <span className="sender">{this.props.sender}</span>
      //   <span className="text">{this.props.text}</span>

      // </Typography>




    )
  }
}

// export default Message;