import React from 'react';
import {DialogTopLine, UserMessage} from "../../components";

const MainContentContainer = () => {

    return (
        <>
            <DialogTopLine/>
            <div className="wrapper-dialog" style={{padding: "30px 35px"}}>
                <UserMessage/>
            </div>
        </>
    );
};

export default MainContentContainer;