import React, {useContext} from 'react';
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import {AuthContext} from "../../context/AuthContext";

const TopLinePopup = ({togglePopup}) => {
    const auth = useContext(AuthContext);

    const logOut = () => {
        auth.logout();
    };

    return (
        <div className="top-line__popup-menu">
            <div className="top-line__popup-content" onClick={togglePopup}>
                <ul className="top-line__popup-menu_list">
                    <li className="top-line__popup-menu_item" onClick={logOut}><LogoutOutlined />Выйти</li>
                </ul>
            </div>
        </div>
    );
};

export default TopLinePopup;