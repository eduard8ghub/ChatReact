import React, {useState} from 'react';

import './UserAvatar.sass';

const UserAvatar = ({withoutStatus}) => {
    const [avatarImg, setAvatarImg] = useState(false);
    console.log(withoutStatus);
    return (
        <div className="user-avatar">
            {
                avatarImg ?
                    <div>img</div> :
                    <div className="user-avatar__without-avatar">
                        <span className="user-avatar__letter-name">L</span>
                    </div>
            }
            {
                withoutStatus && <div className="user-avatar__status --online" />

            }
        </div>
    );
};

export default UserAvatar;