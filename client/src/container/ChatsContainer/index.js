import React, {useEffect, useState} from 'react';
import {Chat} from "../../components";
import {useHttp} from "../../hooks/http.hook";
import {Spin} from "antd";
import {connect} from "react-redux";
import {getChats, getOpenChat} from "../../store/Chats/action";
import {useAuth} from "../../hooks/auth.hook";

import socket from "../../core/soket";

const ChatsContainer = (props) => {
    const [showChats, setShowChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const {loading, request} = useHttp();
    const {userId, userName} = useAuth();

    const asyncGetChats = async () => {
        return  await request('/api/chat', 'GET');
    };
    useEffect(() => {
        asyncGetChats().then(res => {
            props.getChats(res);
        })
    }, []);

    useEffect(() => {
        if(props.findChats && props.findChats.length) {
            setShowChats(props.findChats);
            return;
        }
        if (props.chats) {
            setShowChats(props.chats)
        }
    }, [props.chats, props.findChats]);

    const setOpenChat = (e) => {
        setSelectedChat(e);
        props.getOpenChat(e);
        socket.emit('userJoined', userId, data => {})
    };

    return (
        <>
            {loading ? (
                <div style={{textAlign: "center"}}>
                    <Spin size="large"/>
                </div>
            ) : (
                showChats && showChats.map(chat => <Chat chat={chat} key={chat._id} onClick={setOpenChat} selectedChat={selectedChat}/>)
            )

            }
        </>
    );
};

const mapStateToProps = ({chats}) => ({
    chats: chats.chats,
    findChats: chats.findChats
});

export default connect(mapStateToProps, {getChats, getOpenChat})(ChatsContainer);