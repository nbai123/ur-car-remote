import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { PromiseProvider } from 'mongoose';

const CarRemote = (props) => {
    return (
        <div>
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </div>
    )
}

export default CarRemote;