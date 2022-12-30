import React from 'react';
import { List, ListItem } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Link, useParams, Navigate } from 'react-router-dom';
import './style.css';


export default function ChatList({ chats, chatId }) {

  // const { chatId } = useParams();
  // console.log(chatId);

  return (

    <List>
      {
        Object.keys(chats).map((id, i) => (
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
        ))
      }
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