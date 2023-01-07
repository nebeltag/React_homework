import React, { Component } from 'react';
import './style.css';
import { Button, TextField, createRef, createTheme } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from '../Message/Message.jsx';
// import { useRef, createRef, focus } from 'react';
import { connect } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { sendMessage, deleteMessage } from '../../store/actions/msg_action.js'




class MessageField extends Component {

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

    // messages: [
    //   { sender: 'Bot', text: 'Hello!' },
    //   { sender: 'Bot', text: 'How are you?' }
    // ],
    text: '',
    sender: '',
    answered: true

  };

  handleChangeText = (event) => {
    let { profileName } = this.props;
    if (event.keyCode !== 13) {
      this.setState({
        text: event.target.value,
        sender: profileName === '' ? 'Me' : profileName
      });
      // console.log(this.state.text);
    } else {
      this.handleSend();
    }
  }

  // handleChangeName = (event) => {
  //   if (event.keyCode !== 13) {
  //     this.setState({ sender: event.target.value });
  //   } else {
  //     this.handleSend();
  //   }
  // }

  handleSend = () => {
    let { text, sender } = this.state;
    // let { sender } = this.state;
    // let s = sender ? sender : 'Bot';
    // let t = text ? text : 'FuckOff';
    // this.sendMessage(text, sender);
    let id = Object.keys(this.props.messages).length + 1;
    this.props.sendMessage(id, sender, text);
    this.setState({ text: '' })

    // this.setState({ messages: [...this.state.messages, 'Good'] }, () => {
    //   console.log(this.state.messages);
    // });
  }

  removePost = (myId) => {
    // let { myId } = this.props;
    // console.log(myId)
    // alert(`Id:${myId}`)
    // let id = Object.keys(this.props.messages).length + 1;
    let filteredKeys = Object.keys(this.props.messages).filter(el => el !== myId);
    this.props.deleteMessage(myId, filteredKeys)
  }

  // sendMessage = (text, sender) => {
  //   let { messages } = this.state;
  //   this.setState(
  //     { messages: [...messages, { text, sender }], text: '' }
  //     , () => {
  //       console.log(this.state.messages);
  //     }
  //   )

  //   if (sender === 'Me') {
  //     this.setState({ answered: false });
  //   } else {
  //     this.setState({ answered: true });
  //   }
  // }

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
    console.log(this.props);
    let { messages } = this.props;
    let { text } = this.state;
    const MessageElements = Object.keys(messages).map((id) => (
      <Message key={id} myId={id} text={messages[id].text} sender={messages[id].sender}
        removePost={this.removePost} />
    )
    );

    console.log(MessageElements);

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
            value={text}
            onChange={this.handleChangeText}
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

const mapStateToProps = ({ message, profile }) => ({
  messages: message.messages,
  profileName: profile.profileName,

})
const mapDispatchToProps = dispatch => bindActionCreators({
  sendMessage, deleteMessage
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MessageField);

// export default MessageField;