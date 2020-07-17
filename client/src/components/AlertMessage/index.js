import React from 'react';

const AlertMessage = ({status, message}) => {
    return (
        <p style={{color: status}}>{message}</p>
    );
};

export default AlertMessage;