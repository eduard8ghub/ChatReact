import React, {useEffect, useState} from 'react';
import {Chat} from "../../components";
import {useHttp} from "../../hooks/http.hook";
import {Spin} from "antd";
import {connect} from "react-redux";
import {getChats} from "../../store/Chats/action";

const ChatsContainer = (props) => {
    const [showChats, setShowChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const {loading, request} = useHttp();

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
        console.log(e);
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

export default connect(mapStateToProps, {getChats})(ChatsContainer);