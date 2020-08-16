import React, {useState} from 'react';

import './DialogTopLine.sass';
import {DotsButton} from "../index";
import TopLinePopup from "../TopLinePopup";
import {connect} from "react-redux";

const DialogTopLine = ({openChat}) => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup)
    };

    return (
        <div className="top-line">
            {openChat &&
            <div className="top-line__title">{openChat && openChat.title}</div>
            }


            <DotsButton onclick={togglePopup}/>
            {
                showPopup && <TopLinePopup togglePopup={togglePopup}/>
            }
        </div>
    );
};

const mapStateToProps = ({chats}) => ({
    openChat: chats.openChat
});

export default connect(mapStateToProps)(DialogTopLine);