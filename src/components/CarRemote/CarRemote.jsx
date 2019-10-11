import React from 'react';
import NavBar from '../NavBar/NavBar'
import RemoteButtons from '../RemoteButtons/RemoteButtons'
import { PromiseProvider } from 'mongoose';

const CarRemote = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <RemoteButtons 
            handleLockClick={props.handleLockClick}
            handleStartStopClick={props.handleStartStopClick}
            handleWindowClick={props.handleWindowClick} 
            />
        </div>
    )
}

export default CarRemote;