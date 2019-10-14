import React from 'react';
import RemoteButtons from '../RemoteButtons/RemoteButtons'

const CarRemote = (props) => {
    return (
        <div>
            <RemoteButtons 
            handleLockClick={props.handleLockClick}
            handleStartStopClick={props.handleStartStopClick}
            handleWindowClick={props.handleWindowClick} 
            />
        </div>
    )
}

export default CarRemote;