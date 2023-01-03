import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from '../Message/Message.jsx';
// import { useRef, createRef, focus } from 'react';


const MessageField = (props) => {
  console.log(props);

  const [state, setState] = useState(
    {
      messages: [
        //     { id: 1, sender: '', text: '' },
        //     { id: 2, sender: '', text: '' }
      ],
    }
  )

  useEffect(() => {
    setState({ messages: [...props.messages] })
  }, [props.messages]);

  const [post, setPost] = useState({ text: '', sender: 'Me' })
  const [bot, setBot] = useState({ text: '', sender: '' })
  const [answer, setAnswer] = useState(true);



  function handleChangeText(event) {
    if (event.keyCode !== 13) {
      setPost({ ...post, text: event.target.value, sender: 'Me' })

    }
    // else {
    //   handleSend();
    // }
  }

  useEffect(() => {
    console.log(post.text);
  });


  // handleChangeName = (event) => {
  //   if (event.keyCode !== 13) {
  //     this.setState({ sender: event.target.value });
  //   } else {
  //     this.handleSend();
  //   }
  // }

  // function handleSend() {
  // let p = post
  // let b = bot
  // state.text = newText;
  // state.sender = newSender;
  // let { text } = state;
  // let { sender } = state;
  // let { text, sender } = post;
  // sendMessage();

  // this.setState({ messages: [...this.state.messages, 'Good'] }, () => {
  //   console.log(this.state.messages);
  // });
  // }

  function sendMessage() {

    // let { messages } = state;

    setState(
      { messages: [...props.messages, { ...post, id: Date.now() }] }
    )
    setPost({ text: '', sender: 'Me' });
    setBot({ text: 'Leave me', sender: `${props.chatId}` })

    if (post.sender === 'Me') {
      setAnswer(false);
    } else {
      setAnswer(true);;
    }
  }


  useEffect(() => {
    if (!answer) {
      setTimeout(() => {
        setState(
          { messages: [...messages, { ...bot, id: Date.now() }] }
        );

        // setPost({ ...post, text: 'Leave me', sender: 'Leave me' })
        // sendMessage(b);
      }, 1000)
    }
  }, [bot])


  const focusMe = useRef();

  useEffect(() => {
    setTimeout(() => {
      focusMe.current.focus();
    }, 2000)
  },);


  console.log(state)
  let { messages } = state;
  const MessageElements = messages.map((message, index) => (
    <Message key={index} id={index + 1} text={message.text} sender={message.sender} />
  ));



  return (
    <div className="messageBox">

      {/* <p>{this.state.text}</p>
        <p>{this.state.name}</p> */}
      <div className='messageElements'>
        {MessageElements}
      </div>

      <form className='formStyle'>

        {/* <input className="inputStyle"
          type="text"
          placeholder="Введите сообщение"
                    value={this.value}
          onChange={this.handleChangeText}
          ref={inputRef}
        /> */}

        {/* <input className="inputStyle"
            type="text"
            placeholder="Введите имя"
            value={this.value}
            onChange={this.handleChangeName} ref={this.textInput} /> */}

        {/* <button className="buttonStyle"
            type="button"
            onClick={this.handleSend(this.state.text, 'Me')}>
            onClick={this.handleSend}>
            Отправить</button> */}

        <TextField id="filled-basic"
          label="Введите сообщение"
          variant="filled"
          className='textField'
          style={{ marginBottom: '25px', borderRadius: '5px' }}
          value={post.text}
          onChange={handleChangeText}
          inputRef={focusMe}
        />

        {/* <TextField id="filled-basic"
            label="Введите имя"
            variant="filled"
            className='textField'
            style={{ marginBottom: '25px', borderRadius: '5px' }}
            value={this.value}
            onChange={this.handleChangeName}
          /> */}

        <Button type="button"
          variant="contained"
          endIcon={<SendIcon />}
          className='sendButton'
          onClick={sendMessage}
          style={{ margin: '0 0 25px 0', width: '219px', fontSize: '18px' }}
        >
          Send
        </Button>
      </form>
    </div>
  )

}

export default MessageField;