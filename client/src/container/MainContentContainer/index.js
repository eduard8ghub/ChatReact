import React, {useEffect, useState} from 'react';
import {DialogTopLine, UserMessage} from "../../components";
import {connect} from "react-redux";
import {WrapperInputTextContainer} from "../../container";

const MainContentContainer = (props) => {
    const [openChat, setOpenChat] = useState(null);

    useEffect(() => {
        setOpenChat(props.openChat)
    }, [props.openChat])

    return (
        <>
            <DialogTopLine openChat={openChat}/>
            <div className="wrapper-dialog" style={{padding: "30px 35px"}}>
                {openChat ?
                    <UserMessage/> :
                    <h3 style={{textAlign: "center", marginTop: "50px", fontSize: "32px"}}>Select the chat</h3>
                    }
                <WrapperInputTextContainer />
            </div>
        </>
    );
};

const mapStateToProps = ({chats}) => ({
    openChat: chats.openChat
})

export default connect(mapStateToProps)(MainContentContainer);