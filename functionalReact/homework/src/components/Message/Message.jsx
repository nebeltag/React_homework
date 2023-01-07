import React from "react";
import './style.css';
// import PropTypes from 'prop-types';
import { Typography, Chip, Avatar, Stack } from "@mui/material";


const Message = (props) => {

  // static propTypes = {
  //   text: PropTypes.string.isRequired,
  // };


  console.log(props);
  let { sender, text } = props;
  const message = sender === 'Me'
    ?
    <Stack direction="row" spacing={1}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: "flex-end", marginBottom: '20px'
      }}>
      <span className='senderTitle'>{sender}</span>
      <Chip
        avatar={<Avatar alt={sender}
          src="/broken-image.jpg"
        >
        </Avatar>}
        label={text}

        color="primary"
        className='sender'
      ></Chip>

      {/* <span className="sender">{this.props.sender}</span>
        <span className="text">{this.props.text}</span> */}
    </Stack>
    :
    <Stack direction="row" spacing={1}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: "flex-start", marginBottom: '20px'
      }}>
      <span className='senderBotTitle'>{sender}</span>
      <Chip
        avatar={<Avatar alt={sender}
          src="/broken-image.jpg"
        >
        </Avatar>}
        label={text}

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

export default Message;


