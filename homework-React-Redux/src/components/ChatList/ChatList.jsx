import React, { Component } from 'react';
import { List, ListItem } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import './style.css';


export default class ChatList extends Component {

  render() {
    return (
      <List >
        <Link to='/chats/Harry/'
          style={{ textDecoration: 'none', color: '#4ebc7c' }}>
          <ListItem
            button={true}>
            Harry
            <SendIcon style={{ margin: '7px 0 0 10px' }} />
          </ListItem>
        </Link>
        <Link to='/chats/Hermiona/'
          style={{ textDecoration: 'none', color: '#4ebc7c' }}>
          <ListItem
            button={true}>
            Hermiona
            <SendIcon style={{ margin: '7px 0 0 10px' }} />
          </ListItem>
        </Link>
        <Link to='/chats/Ron/'
          style={{ textDecoration: 'none', color: '#4ebc7c' }}>
          <ListItem
            button={true}>
            Ron
            <SendIcon style={{ margin: '7px 0 0 10px' }} />
          </ListItem>
        </Link>
        <Link to='/chats/Voldemort/'
          style={{ textDecoration: 'none', color: '#4ebc7c' }}>
          <ListItem
            button={true}>
            Voldemort
            <SendIcon style={{ margin: '7px 0 0 10px' }} />
          </ListItem>
        </Link>
        <Link to='/chats/LeStrange/'
          style={{ textDecoration: 'none', color: '#4ebc7c' }}>
          <ListItem
            button={true}>
            LeStrange
            <SendIcon style={{ margin: '7px 0 0 10px' }} />
          </ListItem>
        </Link>
        <Link to='/chats/Snag/'
          style={{ textDecoration: 'none', color: '#4ebc7c' }}>
          <ListItem
            button={true}>
            Snag
            <SendIcon style={{ margin: '7px 0 0 10px' }} />
          </ListItem>
        </Link>
      </List >
    )
  }
}