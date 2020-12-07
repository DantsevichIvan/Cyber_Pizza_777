import React from 'react';
import {useDispatch} from "react-redux";
import '../style/BtnLogOut.css'
import {logOut} from "../action/authAction";

const LogOut = () => {
    const dispatch = useDispatch()
    const logout = () =>{
        dispatch(logOut())
    }
    return (
        <div className='btn_logOut'>
            <button onClick={logout}>LogOut</button>
        </div>
    );
};

export default LogOut;
