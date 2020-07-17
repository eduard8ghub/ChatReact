import React, {useState} from 'react';

import './UserMessage.sass';
import {DotsButton, UserAvatar} from "../index";
import CheckOutlined from "@ant-design/icons/lib/icons/CheckOutlined";

const UserMessage = ({openChat}) => {
    const [userGuest, setUserGuest] = useState(true)



    return (
        <>
            <div className='user-message'>
                <UserAvatar withoutStatus={false} titleChat={'test'}/>
                <div className="user-message__text">Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться
                    на галльских землях, лол
                </div>
                <div className="user-message__time-written">Вчера, в 12:31</div>
            </div>
            <div className='user-message --guest'>
                <UserAvatar withoutStatus={false} titleChat={'test'}/>
                <div className="user-message__text">Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться
                    на галльских землях, лол
                    {
                        userGuest &&
                            <>
                                <div className="user-message__edit-message"><DotsButton /></div>
                                <CheckOutlined style={{color: '#0C8FE4'}}/>
                             </>
                    }
                </div>
                <div className="user-message__time-written">Вчера, в 12:31</div>
            </div>
        </>
    );
};

export default UserMessage;