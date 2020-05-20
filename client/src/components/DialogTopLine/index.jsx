import React, {useState} from 'react';

import './DialogTopLine.sass';
import {DotsButton} from "../index";
import TopLinePopup from "../TopLinePopup";

const DialogTopLine = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup)
    };

    return (
        <div className="top-line">
            <div className="top-line__title">Гай Юлий Цезарь</div>
            <div className="top-line__status"><span className="top-line__status_icon"/>онлайн</div>
            <DotsButton onclick={togglePopup}/>
            {
                showPopup && <TopLinePopup togglePopup={togglePopup}/>
            }
        </div>
    );
};

export default DialogTopLine;