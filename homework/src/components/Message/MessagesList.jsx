import React from 'react';
import './style.css';


export class Button extends React.Component {
  state = {

    text: '',
    name: ''

  }

  inputText = (event) => {
    this.setState({ text: event.target.value })
  }

  inputName = (event) => {
    this.setState({ name: event.target.value })
  }

  handlerClick = () => {
    this.props.updateMessages(this.state)
  }

  render() {
    return (
      <form className='formStyle'>
        <input className="inputStyle" type="text" placeholder="Введите сообщение"
          value={this.value} onChange={this.inputText} />
        <input className="inputStyle" type="text" placeholder="Введите имя" value={this.value} onChange={this.inputName} />
        {/* <p>{this.state.text}</p>
        <p>{this.state.name}</p> */}
        <button className="buttonStyle" type="button" onClick={this.handlerClick}>Отправить</button>
      </form>
    )
  }

}

class MessagesList extends React.Component {

  state = {
    messages: []

  };



  updateMessages = (message) => {
    this.setState({ messages: [...this.state.messages, message] }, () => {
      console.log(this.state.messages);
    });
  }

  // updateData = (messages) => {
  //   this.setState({ messages }, () => {
  //     console.log(this.state);
  //   });
  // }

  render() {
    // const text = [...this.state.messages].find(item => item.text);
    return (
      <div className="messageBox">
        {/* <p><span>{text}</span></p> */}
        {/* <p><span>{this.state.messages.name}</span></p> */}
        <Button updateMessages={this.updateMessages} />
      </div>
    )
  }
}

export default MessagesList;