import React from 'react';
import { List, ListItem } from "@mui/material";
import { Link } from 'react-router-dom';
import './style.css';

export default function Header(props) {


  return (
    <div className='header-wrp'>
      <div className="header">
        <h1>{props.pageTitle} {props.name}{props.selectChat}</h1>
      </div>


      <List
        style={{ display: 'flex' }}>

        <Link to='/'
          style={{
            textDecoration: 'none', color: 'rgb(240 101 60)',
            fontSize: '30px', fontWeight: '700', display: 'flex', marginRight: '33px'
          }}>
          <ListItem
            button={true}>
            Home
          </ListItem>
        </Link>

        <Link to='/chats/Hogwarts/'
          style={{
            textDecoration: 'none', color: 'rgb(240 101 60)',
            fontSize: '30px', fontWeight: '700', display: 'flex', marginRight: '33px'
          }}>
          <ListItem
            button={true}>
            Chat room
          </ListItem>

        </Link>
        <Link to='/profile/'
          style={{
            textDecoration: 'none', color: 'rgb(240 101 60)',
            fontSize: '30px', fontWeight: '700', display: 'flex', marginRight: '33px'
          }}>
          <ListItem
            button={true}>
            Profile
          </ListItem>
        </Link>

      </List >
    </div>
  )

}