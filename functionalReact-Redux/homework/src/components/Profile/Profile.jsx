import React from 'react';
import '../Header/style.css';
import '../Home/style.css';
import './style.css';
import logo from '../Home/logo.svg'
import Header from '../Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { EXAMPLE_ACTION } from '../../store/actions/profileAction.js';



export default function Profile() {

  const { showName, name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  // console.log(showName, name)
  const setShowName = () => {
    dispatch({ type: EXAMPLE_ACTION, payload: !showName });
  };

  let pageTitle = 'Profile';

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='profileWrp'>
        <h1 className='profileText'>Profile</h1>
        <div className='profileInput'>
          <input
            id='qwe'
            type="checkbox"
            checked={showName}
            value={showName}
            onChange={setShowName}
          />
          <span>Show Name</span>
        </div>
        {showName && <div className='profileState'>{name}</div>}
      </div>
    </div>
  )

}