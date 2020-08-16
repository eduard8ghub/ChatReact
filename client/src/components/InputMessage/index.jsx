import React, {useEffect, useState} from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import "./InputMessage.sass"
import SmileOutlined from "@ant-design/icons/lib/icons/SmileOutlined";
import OutsideAlerter from "../../hooks/outsideClick";
import {MediaButton, RegAudioButton, SendButton} from "../index";

import socket from "../../core/soket";


const InputMessage = (props) => {
    const [showEmoji, setShowEmoji] = useState(false);
    const [messageInputValue, setMessageInputValue] = useState('');


    const openEmoji = () => {
        document.body.classList.add('open');
        setShowEmoji(true)
    }

    const writeMessage = (e) => {
        setMessageInputValue(e.target.value);
    }

    const addEmoji = (e) => {
        setMessageInputValue(messageInputValue + e.native)
    }

    const onSendMessage = () => {
        console.log(messageInputValue);
        socket.emit('chat message', messageInputValue);
        socket.on('chat message', (data) => {
            console.log(data);
        })
    }



    return (
        <div className="wrapper-input-message" >
            <div className="wrapper-input-message__open-emoji" onClick={openEmoji}>
                <SmileOutlined style={{fontSize: "16px"}} className="smileIcon"/>
            </div>
            <input type="text" className="wrapper-input-message__input" onChange={writeMessage} value={messageInputValue}/>
            {showEmoji &&
                <OutsideAlerter>
                    <span className="wrapper-input-message__emoji">
                       <Picker onSelect={addEmoji} />
                    </span>
                </OutsideAlerter>
            }
            <div className="wrapper-input-message__buttons">
                <MediaButton />
                <RegAudioButton/>
                <SendButton onSendMessage={onSendMessage} />
            </div>
        </div>
    );
};

export default InputMessage;
