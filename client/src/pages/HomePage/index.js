import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import {User} from "../../components";
import {MainContentContainer} from "../../container";

import {UserSwitchOutlined, FormOutlined} from '@ant-design/icons';
import {AuthContext} from "../../context/AuthContext";
import './HomePage.sass';
import {Input} from "antd";

const {Search} = Input;

const HomePage = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const handleLogOut = () => {
        auth.logout();
        history.push('/login')
    };
    return (
        <div className='home'>
            <div className="sidebar">
                <div className="sidebar__top">
                    <span className="sidebar__icon"><UserSwitchOutlined /></span>
                    <p>Список диалогов</p>
                    <span className="sidebar__icon"><FormOutlined /></span>
                </div>
                <div className="sidebar__search">
                    <Search
                        placeholder="Поиск среди контактов"
                        onSearch={value => console.log(value)}
                    />
                </div>
                <div className="sidebar__users">
                    <User/>
                </div>
            </div>
            <div className="main">
                <MainContentContainer />
            </div>
        </div>
    );
};

export default HomePage;