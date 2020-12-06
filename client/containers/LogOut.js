import React from 'react';
import {useDispatch} from "react-redux";

const LogOut = () => {
    const dispatch = useDispatch()
    const logout = () =>{

    }
    return (
        <div>
            <button onClick={logout}>LogOut</button>
        </div>
    );
};

export default LogOut;
