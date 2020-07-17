import React from 'react';

import './Popup.sass';
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";

const Popup = (props) => {

    const hidePopup = (e) => {
        const target = e.target.className;
        if(target === 'popup' || target === 'blur_background') {
            props.onClosePopup()
        }
    };

    return (
        <>
            {
                props.showPopup &&
                <div onClick={hidePopup}>
                    <div className="blur_background"/>
                    <div className="popup">
                        <div className="popup__content">
                            <div className="popup__close" onClick={props.onClosePopup}>
                                <CloseOutlined style={{fontSize: '18px'}}/>
                            </div>
                            {props.children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Popup;