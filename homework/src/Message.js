import './Message.css';

function Message(props) {
  return (
    <div className="Message">
      <header className="Message-header">

        <h1>{props.message}</h1>
        <h1>{props.appMessage}</h1>


      </header>
    </div >
  );
}

export default Message;