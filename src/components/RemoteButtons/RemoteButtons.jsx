import React from 'react';
import LockUnlock from '../LockUnlock/LockUnlock'
import StartStop from '../StartStop/StartStop'
import Windows from '../Windows/Windows'
import Temperature from '../Temperature/Temperature'

const RemoteButtons = (props) => (
        <div>
            <StartStop handleStartStopClick={props.handleStartStopClick} />
            <LockUnlock handleLockClick={props.handleLockClick} />
            <Windows handleWindowClick={props.handleWindowClick} />
            <Temperature />
        </div>
)

export default RemoteButtons;