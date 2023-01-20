import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, Dialog, TextField, DialogTitle, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { addChat, removeChat } from '../../store/Chats/chatsActions.js';
import { addNewMessageList } from '../../store/Messages/messagesActions.js';


import './style.css';


export default function ChatList({ chatId }) {
  console.log(chatId);

  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState("");
  const chats = useSelector((state) => state.chats.chatList);
  const dispatch = useDispatch();
  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);
  const handleChange = (e) => setNewChatName(e.target.value);
  const onAddChat = () => {
    dispatch(addChat(newChatName));
    dispatch(addNewMessageList(`id${chats.length}`, newChatName));
    setNewChatName("");
    handleClose();

  };

  // const onAddNewMessageList = () => {
  //   dispatch(addNewMessageList(chatId));
  // }
  const onRemoveChat = () => {
    dispatch(removeChat(chatId));
  };

  console.log(chats, chatId);


  let chatsItems = chats.map((el, i) => (
    <div key={i} id={i + 1}>
      <Link to={`/chats/${el.id}`}
        style={{
          display: 'flex',
          textDecoration: 'none',
          color: el.id === chatId ? '#4ebc7c' : "grey",
          fontWeight: 700
        }}>
        <ListItem
          button={true}
        // onClick={onAddNewMessageList}
        >
          {el.name}
          <SendIcon style={{ margin: '7px 0 0 10px' }} />
        </ListItem>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <IconButton type="button" aria-label="delete" size="small"
            onClick={onRemoveChat}
          >
            <DeleteIcon fontSize="small" style={{ color: el.id === chatId ? '#4ebc7c' : "grey" }} />

          </IconButton>
        </div>
      </Link>
    </div>
  ))



  return (
    <div className='chatsWrp'>
      <List>
        {chatsItems}

        {/* Object.keys(chats).map((id, i) => (
          <div key={i}>
            <Link to={`/chats/${id}`}
              style={{
                textDecoration: 'none',
                color: id === chatId ? '#4ebc7c' : "grey",
                fontWeight: 700
              }}>
              <ListItem
                button={true}>
                {chats[id].name}
                <SendIcon style={{ margin: '7px 0 0 10px' }} />
              </ListItem>
            </Link>
          </div>
        )) */}

      </List>

      <div>
        <Button
          style={{
            height: '100%', width: '100%', fontSize: '24px', fontWeight: '900',
            color: '#46ae70'
          }}
          onClick={handleOpen}>
          Add Chat
        </Button>

        <Dialog open={visible} onClose={handleClose}>
          <DialogTitle>Please enter a name for new chat</DialogTitle>
          <TextField value={newChatName} onChange={handleChange} />
          <Button onClick={onAddChat} disabled={!newChatName}>
            Submit
          </Button>
        </Dialog>

      </div>
    </div>
    /*< List >
      <Link to={`/chats/${id}`}
        style={{ textDecoration: 'none', color: id === chatId ?'#4ebc7c': "grey" }}>
        <ListItem
          button={true}>
          {chats[id].name}
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
    </List >*/
  )

}