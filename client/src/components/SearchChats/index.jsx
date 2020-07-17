import React from 'react';
import {Input} from "antd";
import {connect} from "react-redux";
import {getFindChats} from "../../store/Chats/action";
const {Search} = Input;


const SearchChats = (props) => {

    const searchChats = (word) => {
        props.getFindChats(word)
    };

    return (
        <div className="sidebar__search">
            <Search
                placeholder="Поиск среди контактов"
                onSearch={value => searchChats(value)}
            />
        </div>
    );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {getFindChats})(SearchChats);