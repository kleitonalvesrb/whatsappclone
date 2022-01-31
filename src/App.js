import React, { useEffect, useState } from 'react';
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import ChatListItem from './components/ChatList/ChatListItem';
import ChatIntro from './components/ChatIntro/ChatInto';
import ChatWindow from './components/ChatWindow/ChatWindow';
import NewChat from './components/NewChat/NewChat';
import Login from './components/Login/Login';
import Api from './Api/Api';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatlist, setChatlist] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);

  const [showNewChat, setShowNewChat] = useState(false);
  useEffect(() => {
    console.log('parou em 04:42 useRef em 02:55' +
      'aproximadamente, 3:20 começa firebase, login com fb 3:26:50');
  }, [])

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatlist);
      return unsub;
    }
  }, [user]);
  const handleNewChat = () => {
    setShowNewChat(true);
  }

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    //adiciona o usuario no banco de dados do firebase
    await Api.addUser(newUser);
    setUser(newUser);
  }

  //tela de login
  if (user === null) {
    return (<Login onReceive={handleLoginData} />)
  }

  return (
    <div className="app-window">
      <div className='sidebar'>
        <NewChat
          chatList={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />

        <header>
          <img className='header--avatar' src={user.avatar} alt='avatar' />
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{ color: '#919191' }} />
            </div>
            <div className='header--btn' onClick={handleNewChat}>
              <ChatIcon style={{ color: '#919191' }} />
            </div>
            <div className='header--btn'>
              <MoreVert style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{ color: '#919191' }} />
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>
        <div className='chatlist'>
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className='contetarea'>
        {activeChat.chatId !== undefined &&
          <ChatWindow user={user} data={activeChat} />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}