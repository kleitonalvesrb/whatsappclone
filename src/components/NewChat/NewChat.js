import { ArrowBack } from "@material-ui/icons";
import React, { useState } from "react";
import './NewChat.css'

function NewChat({ user, chatList, show, setShow }) {
    const [list, setList] = useState([
        {
            id: 123,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Diná'
        },
        {
            id: 123,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Arnaldo'
        },
        {
            id: 123,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Kelly'
        },
        {
            id: 123,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Thaynara'
        }

    ])
    const handleClose = () =>{
        setShow(false);
    }

    return (
        <div className="newChat" style={{ left: show ? "0" : "-415px" }}>
            <div className="newChat--head">
                <div className="newChat--backbutton" onClick={handleClose}>
                    <ArrowBack style={{ color: '#FFF' }} />
                </div>
                <div className="newChat--headtitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;