import React, {useState} from 'react';

import './User.sass';

const User = () => {
    const [avatarImg, setAvatarImg] = useState(false);

    return (
        <div className="user">
            <div className="user__avatar">
                {
                    avatarImg ?
                        <div>img</div> :
                        <div className="user__without-avatar">
                            <span className="user__letter-name">L</span>
                        </div>
                }
                <div className="user__status --online" />
            </div>
        </div>
    );
};

export default User;