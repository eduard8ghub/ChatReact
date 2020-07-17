import React, {useEffect, useState} from 'react';

import './UserAvatar.sass';
import {getRandomColor} from "../../utils/GetRandomColor/GetRandomColor";

const UserAvatar = ({withoutStatus, titleChat}) => {
    const [avatarImg] = useState(false);
    const [randomColor1, setRandomColor1] = useState('#c160df');
    const [randomColor2, setRandomColor2] = useState('#c160df');
    const firstLetter = titleChat && titleChat.split('')[0];

    useEffect(() => {
       setRandomColor1(getRandomColor());
       setRandomColor2(getRandomColor());
    }, []);
    return (
        <div
            className="user-avatar"
            style={{background: `linear-gradient(135deg, ${randomColor1} 0%, ${randomColor2} 100%)`}}>
            {
                avatarImg ?
                    <div>img</div> :
                    <div className="user-avatar__without-avatar">
                        <span className="user-avatar__letter-name">{firstLetter}</span>
                    </div>
            }
            {
                withoutStatus && <div className="user-avatar__status --online" />

            }
        </div>
    );
};

export default UserAvatar;