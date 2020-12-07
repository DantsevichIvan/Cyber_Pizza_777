import React from 'react';
import {useDispatch} from "react-redux";
import '../style/BtnLogOut.css'

const LogOut = () => {
    const dispatch = useDispatch()
    const logout = () =>{

    }
    return (
        <div className='btn_logOut'>
            <button onClick={logout}>LogOut</button>
        </div>
    );
};

export default LogOut;
