import React from 'react';
import { List, ListItem } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import './style.css';


export default function ChatList({ chats, chatId }) {

  // const { chatId } = useParams();
  console.log(chats);

  // function removeChat(e) {
  // e.preventDefault();
  // console.log(chatId);
  //   return chatsObj.filter(item => item.key === 2);
  // }

  let chatsObj = Object.keys(chats).map((id, i) => (
    <div key={i} id={id}>
      <Link to={`/chats/${id}`}
        style={{
          display: 'flex',
          textDecoration: 'none',
          color: id === chatId ? '#4ebc7c' : "grey",
          fontWeight: 700
        }}>
        <ListItem
          button={true}
        // onClick={(e) => { console.log(id, chatId) }}
        >
          {chats[id].name}
          <SendIcon style={{ margin: '7px 0 0 10px' }} />
        </ListItem>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <IconButton type="button" aria-label="delete" size="small"
            onClick={(e) => { chatsObj.map((item) => console.log(item.props.id !== id)) }}
          // onClick={(e) => { chatsObj.filter((item) => item.key === '3') }}
          // onClick={(e) => { console.log(id, chatId) }}
          >
            <DeleteIcon fontSize="small" style={{ color: id === chatId ? '#4ebc7c' : "grey" }} />
          </IconButton>
        </div>
      </Link>
    </div>
  ))



  // function removeChat() {
  // e.preventDefault();
  // console.log(chatId);
  //   return chatsArray.filter(item => item[chatId] !== chatId);
  // }

  console.log(chatsObj)

  return (

    <List>
      {chatsObj}

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

    // < List >
    //   <Link to={`/chats/${id}`}
    //     style={{ textDecoration: 'none', color: id === chatId ?'#4ebc7c': "grey" }}>
    //     <ListItem
    //       button={true}>
    //       {chats[id].name}
    //       <SendIcon style={{ margin: '7px 0 0 10px' }} />
    //     </ListItem>
    //   </Link>
    //   <Link to='/chats/Hermiona/'
    //     style={{ textDecoration: 'none', color: '#4ebc7c' }}>
    //     <ListItem
    //       button={true}>
    //       Hermiona
    //       <SendIcon style={{ margin: '7px 0 0 10px' }} />
    //     </ListItem>
    //   </Link>
    //   <Link to='/chats/Ron/'
    //     style={{ textDecoration: 'none', color: '#4ebc7c' }}>
    //     <ListItem
    //       button={true}>
    //       Ron
    //       <SendIcon style={{ margin: '7px 0 0 10px' }} />
    //     </ListItem>
    //   </Link>
    //   <Link to='/chats/Voldemort/'
    //     style={{ textDecoration: 'none', color: '#4ebc7c' }}>
    //     <ListItem
    //       button={true}>
    //       Voldemort
    //       <SendIcon style={{ margin: '7px 0 0 10px' }} />
    //     </ListItem>
    //   </Link>
    //   <Link to='/chats/LeStrange/'
    //     style={{ textDecoration: 'none', color: '#4ebc7c' }}>
    //     <ListItem
    //       button={true}>
    //       LeStrange
    //       <SendIcon style={{ margin: '7px 0 0 10px' }} />
    //     </ListItem>
    //   </Link>
    //   <Link to='/chats/Snag/'
    //     style={{ textDecoration: 'none', color: '#4ebc7c' }}>
    //     <ListItem
    //       button={true}>
    //       Snag
    //       <SendIcon style={{ margin: '7px 0 0 10px' }} />
    //     </ListItem>
    //   </Link>
    // </List >
  )

}