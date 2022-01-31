import { ArrowBack } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Api from "../../Api/Api";
import './NewChat.css'

function NewChat({ user, chatList, show, setShow }) {
    const [list, setList] = useState([]);
    const handleClose = () => {
        setShow(false);
    }
    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2);
        handleClose();
    }
    useEffect(() => {
        const getList = async () => {
            if (user !== null) {
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user])
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
                    <div className="newChat--item"
                        key={key}
                        onClick={() => addNewChat(item)}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NewChat;