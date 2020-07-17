import React, {useState} from 'react';

import './Chat.sass';
import {UserAvatar} from "../index";

import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";
const cs = require('classnames');



const Chat = ({chat, onClick, selectedChat}) => {
    const [unreadMessage, setUnreadMessage] = useState(true);

    const openChat = () => {
        onClick(chat)
    };

    return (
        <div className={cs('chat', {'chat__active': selectedChat && selectedChat._id === chat._id})} onClick={openChat}>
            <UserAvatar withoutStatus={true} titleChat={chat.title}/>
            <div className="chat__info">
                <div className="chat__info_description">
                    <div className="chat__info_description_name">{chat.title}</div>
                    <div className="chat__info_description_last-message">
                        {chat.message ? chat.message : 'No message.'}
                    </div>
                </div>
                <div className="chat__info_status-last-messages">
                    {
                        unreadMessage ?
                            <div className="chat__info_status-last-messages_count">3</div> :
                            <div className="chat__info_status-last-messages_read"><CheckOutlined style={{color: '#0C8FE4'}}/></div>
                    }
                </div>
                <div className="chat__info_last-visit">{chat.message ? 'yes' : ''}</div>
            </div>
        </div>
    );
};

export default Chat;