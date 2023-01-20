import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Message from '../Message/Message.jsx';
import { useSelector, useDispatch } from 'react-redux';
// import { addMessage } from '../../store/Messages/messagesActions.js';
import { addMessageWithThunk } from '../../middlewares/botMD.js'


const MessageField = (props) => {
  const chats = useSelector((state) => state.chats.chatList);
  const messageList = useSelector(state => state.messages.messageList);
  const dispatch = useDispatch();
  // const [state, setState] = useState(messageList)
  const { chatId } = props;
  // messageList[chatId].map(el => console.log(el.text))
  // console.log(state)
  console.log(messageList)


  console.log(props);

  // const [state, setState] = useState(messages
  // {
  //   messages: [...props.messages
  //     { id: 1, sender: '', text: '' },
  //     { id: 2, sender: '', text: '' }
  //   ],
  // }
  // )
  // console.log(state);

  // useEffect(() => {
  //   setState({ messages: [...props.messages] })
  // }, [chatId]);

  const [message, setMessage] = useState({ text: '', sender: '' })
  // const [bot, setBot] = useState({ text: '', sender: '' })
  // const [answer, setAnswer] = useState(true);
  console.log(message);
  const profileName = useSelector(state => state.profile.profileName);


  function handleChangeText(event) {
    if (event.keyCode !== 13) {
      setMessage({
        text: event.target.value,
        sender: profileName === '' ? 'Me' : profileName
      })

    }
  }

  // const setInput = () => {
  //   setState([...state, {
  //     text: value,
  //     sender: profileName === '' ? 'Me' : profileName
  //   }])
  // };


  const onAddMessage = () => {
    dispatch(addMessageWithThunk(chatId, message));
    setMessage({ text: '', sender: 'Me' });
  };

  // const onAddMessage = () => {
  //   // setState({ ...state, message })
  //   dispatch(addMessage(chatId, message));
  //   setMessage({ text: '', sender: 'Me' });
  //   console.log(message)
  // }

  // useEffect(() => {
  //   console.log(message);
  // });

  // function sendMessage() {

  //   // let { messages } = state;

  //   setState(
  //     { messages: [...messages, { ...post, id: Date.now() }] }
  //   )
  //   setPost({ text: '', sender: 'Me' });
  //   setBot({ text: 'Leave me', sender: `${props.chatId}` })

  //   if (post.sender !== 'Bot') {
  //     setAnswer(false);
  //   } else {
  //     setAnswer(true);;
  //   }
  // }

  // useEffect(() => {
  //   if (!answer) {
  //     setTimeout(() => {
  //       setState(
  //         { messages: [...messages, { ...bot, id: Date.now() }] }
  //       );
  //     }, 1000)
  //   }
  // }, [bot])


  const focusMe = useRef();

  useEffect(() => {
    setTimeout(() => {
      focusMe.current.focus();
    }, 2000)
  });

  const scrollDown = useRef();

  useEffect(() => {
    setTimeout(() => {
      scrollDown.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth' });
    }, 500)
  }, [chatId, message])

  // console.log(state)
  // let { messages } = state;
  // const MessageElements = Object.keys(messages).messages.map((message, index) => (
  //   <Message key={index} name={profileName} Id={chatId} id={index + 1} text={message.text} sender={message.sender} />
  // ));

  // const MessageElements = Object.keys(messages).map((id, index) => (
  //   <Message key={index} myId={id} text={id.text} sender={id.sender} />
  // )
  // );

  // const MessageElements = Object.keys(messageList).map((id) => (
  //   <Message key={id} myId={id} text={id.props} sender={messageList[id].sender} />
  // )
  // );
  // const MessageElements = Object.keys(messages).map((id) => (
  //   <Message key={id} myId={id} text={id.text} sender={id.sender} />
  // )
  // );

  const MessageElements = messageList[chatId].map((el, index) => (
    <Message key={index} id={index + 1} name={profileName} text={el.text} sender={el.sender} />
  )
  );
  // console.log(MessageElements)
  // let chatMessages = MessageElements.filter(item => item.props.Id === props.chatId);
  // console.log(chatMessages)

  return (
    <div className="messageBox">


      <div className='messageElements scrollBar' ref={scrollDown}>
        {MessageElements}
      </div>


      <form className='formStyle'>

        <TextField id="filled-basic"
          label="Введите сообщение"
          variant="filled"
          className='textField'
          style={{ marginBottom: '25px', borderRadius: '5px' }}
          value={message.text}
          onChange={handleChangeText}
          inputRef={focusMe}
        />

        <Button type="button"
          variant="contained"
          endIcon={<SendIcon />}
          className='sendButton'
          onClick={onAddMessage}
          style={{ margin: '0 0 25px 0', width: '219px', fontSize: '18px' }}
        >
          Send
        </Button>
      </form>
    </div >
  )

}

export default MessageField;