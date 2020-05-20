import React, {Component} from 'react';
import {DialogTopLine, UserMessage} from "../../components";

class MainContentContainer extends Component {
    render() {
        return (
            <>
                <DialogTopLine/>
                <div className="wrapper-dialog" style={{padding: "30px 35px"}}>
                    <UserMessage/>
                </div>
            </>
        );
    }
}

export default MainContentContainer;