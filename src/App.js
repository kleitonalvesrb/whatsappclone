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
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatlist, setChatlist] = useState([
    { chatId: 1, title: 'Fulano de tal', image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { chatId: 2, title: 'Fulano de tal 2', image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { chatId: 3, title: 'Fulano de tal 3', image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { chatId: 4, title: 'Fulano de tal 4', image: 'https://www.w3schools.com/howto/img_avatar.png' },

  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    name: 'Kleiton Batista'
  });

  const [showNewChat, setShowNewChat] = useState(false);
  useEffect(() => {
    console.log('parou em 03H15m useRef em 02:55 aproximadamente');
  }, [])

  const handleNewChat = () =>{
    setShowNewChat(true);
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
          <ChatWindow user={user} />
        }
        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}