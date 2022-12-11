import React, { Component } from 'react';
import '../Header/style.css';
import '../Home/style.css';
import './style.css';
import logo from '../Home/logo.svg'
import Header from '../Header/Header.jsx';
import { connect } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { setName, clearInp } from '../../store/profile/actions/profile_action.js'


class Profile extends Component {

  handleChangeName = (event) => {
    if (event.keyCode !== 13) {
      this.setState({ newProfileName: event.target.value });
    } else {
      this.handleSend();
    }
  }

  handleSend = () => {
    let { newProfileName } = this.state;

    // this.sendMessage(text, sender);
    // let id = Object.keys(this.props.messages).length + 1;
    this.props.setName(newProfileName);

    // this.setState({ messages: [...this.state.messages, 'Good'] }, () => {
    //   console.log(this.state.messages);
    // });
  }

  handleClearInp = () => {
    let { value } = this.state;
    this.props.clearInp(value);
  }

  render() {
    console.log(this.props);
    let message = 'Profile';
    let { profileName } = this.props;



    return (
      <div>
        <Header message={message} />
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='textWrp'>
            {/* <input
              type='checkbox'
              checked={changeName}
              onChange={changeName}

            value={changeName}
            />*/}
            <h1 className='text'>
              {profileName}
            </h1>
          </div>
          <div>
            <input type="text"
              value={this.value}
              onChange={this.handleChangeName} />
          </div>
          <div>
            <button
              onClick={this.handleSend}>
              Profile</button>
            <button
              onClick={this.handleClearInp}>
              clear</button>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ profileReducer }) => ({
  profileName: profileReducer.profileName,
  value: profileReducer.value
})
const mapDispatchToProps = dispatch => bindActionCreators({ setName, clearInp }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Profile);