import React, { Component } from 'react';
import './style.css';
import { Button, TextField, createRef, createTheme } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from '../Message/Message.jsx';
// import { useRef, createRef, focus } from 'react';


export default class MessageField extends Component {

  /// Автофокус не работает по умолчанию с инпутами MUI(требуется кастомизация инпутов)

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {

    this.textInput.current.focus();
  }

  ///////////////////////////////////////////////////////////////////////////////

  state = {

    messages: [
      { sender: 'Bot', text: 'Hello!' },
      { sender: 'Bot', text: 'How are you?' }
    ],
    text: '',
    sender: '',
    answered: true

  };

  handleChangeText = (event) => {
    if (event.keyCode !== 13) {
      this.setState({ text: event.target.value });
    } else {
      this.handleSend();
    }
  }

  handleChangeName = (event) => {
    if (event.keyCode !== 13) {
      this.setState({ sender: event.target.value });
    } else {
      this.handleSend();
    }
  }

  handleSend = () => {
    let { text } = this.state;
    let { sender } = this.state;
    // let s = sender ? sender : 'Bot';
    // let t = text ? text : 'FuckOff';
    this.sendMessage(text, sender);


    // this.setState({ messages: [...this.state.messages, 'Good'] }, () => {
    //   console.log(this.state.messages);
    // });
  }

  sendMessage = (text, sender) => {
    let { messages } = this.state;
    this.setState(
      { messages: [...messages, { text, sender }], text: '' }
      , () => {
        console.log(this.state.messages);
      }
    )

    if (sender === 'Max') {
      this.setState({ answered: false });
    } else {
      this.setState({ answered: true });
    }
  }

  // componentDidMount() {

  //   this.focusTextInput();
  // }


  componentDidUpdate() {
    if (!this.state.answered) {
      setTimeout(() => {
        this.sendMessage('Leave me', 'Bot');
      }, 1000)
    }

    // this.focusTextInput();
    // if (!this.state.answered) this.sendMessage('FuckOff', 'Bot');
  }

  render() {
    let { messages } = this.state;
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
            value={this.value}
            onChange={this.handleChangeText}
          // ref={this.textInput}
          />

          <TextField id="filled-basic"
            label="Введите имя"
            variant="filled"
            className='textField'
            style={{ marginBottom: '25px', borderRadius: '5px' }}
            value={this.value}
            onChange={this.handleChangeName}
          />

          <Button type="button"
            variant="contained"
            endIcon={<SendIcon />}
            className='sendButton'
            onClick={this.handleSend}
            style={{ margin: '0 0 25px 0', width: '219px', fontSize: '18px' }}
          >
            Send
          </Button>



        </form>
      </div>
    )
  }
}

// export default MessageField;