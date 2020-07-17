import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import {SidebarTop, SearchChats} from "../../components";
import {MainContentContainer, ChatsContainer} from "../../container";

import {AuthContext} from "../../context/AuthContext";
import './HomePage.sass';
import {Input} from "antd";


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
                <SidebarTop />
                <SearchChats/>
                <div className="sidebar__users">
                    <ChatsContainer/>
                </div>
            </div>
            <div className="main">
                <MainContentContainer />
            </div>
        </div>
    );
};

export default HomePage;