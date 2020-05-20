import React from 'react';

import './DotsButton.sass';

const DotsButton = ({onclick}) => {
    return (
        <div className="dots-button" onClick={onclick}>
            <span className="dots-button__dot"/>
            <span className="dots-button__dot"/>
            <span className="dots-button__dot"/>
        </div>
    );
};

export default DotsButton;