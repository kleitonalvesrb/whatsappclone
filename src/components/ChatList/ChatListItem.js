import React from "react";
import './ChatListItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
function ChatList({onClick,active, data}) {
    return (
        <div className={`chatListItem ${active ? 'active' : ''} `} onClick={onClick}>
            <img className="chatListItem--avatar" src={data.image} alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Kleiton Alves Rodrigues Batista Diná Alves Rodrigues Batista</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ChatList;