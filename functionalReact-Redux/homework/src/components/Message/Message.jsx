import React from "react";
import './style.css';
import { Chip, Avatar, Stack } from "@mui/material";


const Message = (props) => {

  console.log(props);
  let { sender, text, name } = props;
  const message = sender === (name || 'Me')
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

  )
}

export default Message;


