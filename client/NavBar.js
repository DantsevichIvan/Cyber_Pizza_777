import React from 'react';
import {NavLink} from "react-router-dom";
import './style/navBar.css'
import LogOut from "./containers/LogOut";

const NavBar = () => {
    return (
        <div className='header'>
            <div className='header_container'>
                <div className='header_title'>
                    <h2>Administrator</h2>
                </div>
                <NavLink to='/admin/categories'>Categories</NavLink>
                <NavLink to='/admin/products'>Products</NavLink>

                <NavLink to='/admin/login'>Login</NavLink>
            </div>
            {
            //    auth ? <LogOut/>: null
            }
            <LogOut/>
        </div>
    );
};

export default NavBar;
