import React from 'react';
import sendIcon from '../../assets/icons/sendIcon.png'

const SendButton = (props) => {

    return (
        <div onClick={() => props.onSendMessage()}>
            <img src={sendIcon} alt="send"/>
        </div>
    );
};

export default SendButton;
