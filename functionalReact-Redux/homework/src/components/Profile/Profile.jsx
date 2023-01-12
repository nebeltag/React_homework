import React, { useState, useRef, useEffect } from 'react';
import '../Header/style.css';
import '../Home/style.css';
import './style.css';
import { Button, TextField } from "@mui/material";
import logo from '../Home/logo.svg'
import Header from '../Header/Header.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/Profile/profileNameAction.js';



export default function Profile() {
  const [value, setValue] = useState('');
  const { profileName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const setName = () => {
    dispatch(changeName(value))
    setValue('')
  };

  const focusMe = useRef();

  useEffect(() => {
    setTimeout(() => {
      focusMe.current.focus();
    }, 1000)
  },);

  let pageTitle = 'Profile';

  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div style={{ margin: '0 auto', maxWidth: '250px' }}>
        <div>
          <div className='profileState'>{profileName}</div>
          <TextField id="filled-basic"
            label="Enter your name"
            variant="filled"
            className='textField'
            style={{
              marginBottom: '25px', borderRadius: '5px', width: '100%'
            }}
            value={value}
            onChange={handleChange}
            inputRef={focusMe}
          />
        </div>
        <div>
          <Button type="button"
            variant="contained"
            // endIcon={<SendIcon />}
            className='sendButton'
            onClick={setName}
            style={{ margin: '0 0 25px 0', width: '100%', fontSize: '18px' }}
          >
            Change Name
          </Button>
        </div>
      </div>
    </div>
  )

}