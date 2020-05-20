import React, {useState} from 'react';

import './User.sass';
import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";
import {UserAvatar} from "../index";

const User = () => {
    const [unreadMessage, setUnreadMessage] = useState(true);

    return (
        <div className="user">
            <UserAvatar withoutStatus={true}/>
            <div className="user__info">
                <div className="user__info_description">
                    <div className="user__info_description_name">Jack the Ripper</div>
                    <div className="user__info_description_last-message">Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻</div>
                </div>
                <div className="user__info_status-last-messages">
                    {
                        unreadMessage ?
                            <div className="user__info_status-last-messages_count">3</div> :
                            <div className="user__info_status-last-messages_read"><CheckOutlined style={{color: '#0C8FE4'}}/></div>
                    }
                </div>
                <div className="user__info_last-visit">09:33</div>
            </div>
        </div>
    );
};

export default User;