import React, { useState, useEffect } from 'react';
import './style.css';
import { Button, TextField, createRef, createTheme } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from '../Message/Message.jsx';
// import { useRef, createRef, focus } from 'react';


const MessageField = (props) => {

  /// Автофокус не работает по умолчанию с инпутами MUI(требуется кастомизация инпутов)

  // constructor(props) {
  //   super(props);
  //   this.textInput = React.createRef();
  //   this.focusTextInput = this.focusTextInput.bind(this);
  // }

  // focusTextInput() {

  //   this.textInput.current.focus();
  // }

  ///////////////////////////////////////////////////////////////////////////////

  // state = {

  //   messages: [
  //     { sender: 'Bot', text: 'Hello!' },
  //     { sender: 'Bot', text: 'How are you?' }
  //   ],
  //   text: '',
  //   sender: '',
  //   answered: true

  // };

  const [state, setState] = useState(
    {
      messages: [
        { sender: 'Bot', text: 'Hello!' },
        { sender: 'Bot', text: 'How are you?' }
      ],

      text: '',
      sender: '',
    }
  )

  const [newText, setNewText] = useState('');
  const [newSender, setNewSender] = useState('');
  const [answer, setAnswer] = useState(true);

  function handleChangeText(event) {
    if (event.keyCode !== 13) {
      setNewText(event.target.value);
      setNewSender('Me')
    } else {
      this.handleSend();
    }
  }

  useEffect(() => {
    console.log(newText);
  });


  // handleChangeName = (event) => {
  //   if (event.keyCode !== 13) {
  //     this.setState({ sender: event.target.value });
  //   } else {
  //     this.handleSend();
  //   }
  // }

  function handleSend() {
    state.text = newText;
    state.sender = newSender;
    let { text } = state;
    let { sender } = state;
    sendMessage(text, sender);

    // this.setState({ messages: [...this.state.messages, 'Good'] }, () => {
    //   console.log(this.state.messages);
    // });
  }

  function sendMessage(text, sender) {

    let { messages } = state;

    setState(
      { messages: [...messages, { text, sender }] }
    )
    setNewText('');


    if (state.sender === 'Me') {
      setAnswer(false);
    } else {
      setAnswer(true);;
    }
  }


  useEffect(() => {
    if (!answer) {
      setTimeout(() => {
        sendMessage('Leave me', 'Bot');
      }, 1000)
    }
  })

  // this.focusTextInput();
  // if (!this.state.answered) this.sendMessage('FuckOff', 'Bot');
  // }


  let { messages } = state;
  console.log(state)
  const MessageElements = messages.map((message, index) => (
    <Message key={index} text={message.text} sender={message.sender} />
  )
  );
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
            ref={this.textInput}
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
          autoFocus
          label="Введите сообщение"
          variant="filled"
          className='textField'
          style={{ marginBottom: '25px', borderRadius: '5px' }}
          value={newText}
          onChange={handleChangeText}
        // ref={this.textInput}
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
          onClick={handleSend}
          style={{ margin: '0 0 25px 0', width: '219px', fontSize: '18px' }}
        >
          Send
        </Button>
      </form>
    </div>
  )

}

export default MessageField;