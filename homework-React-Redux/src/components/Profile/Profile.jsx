import React, { Component } from 'react';
import '../Header/style.css';
import '../Home/style.css';
import './style.css';
import logo from '../Home/logo.svg'
import Header from '../Header/Header.jsx';
import { connect } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { changeName } from '../../store/profile/actions/profile_action.js'


class Profile extends Component {

  render() {
    console.log(this.props);
    let message = 'Profile';
    let { profile, changeName } = this.props;
    // let { changeName } = this.props;

    return (
      <div>
        <Header message={message} />
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='textWrp'>
            <input
              type='checkbox'
              // checked={changeName}
              onChange={changeName}

            // value={changeName}
            />
            <h1 className='text'>
              {profile}
            </h1>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ profileReducer }) => ({
  profile: profileReducer.profile,

})
const mapDispatchToProps = dispatch => bindActionCreators({ changeName }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Profile);