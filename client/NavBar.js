import React from 'react';
import {NavLink} from "react-router-dom";
import './style/navBar.css'

const NavBar = () => {
    return (
        <div className='header'>
            <div className='header_container'>
                <div className='header_title'>
                    <h2>Administrator</h2>
                </div>
                <NavLink to='/admin/categories'>Categories</NavLink>
                <NavLink to='/admin/products'>Products</NavLink>
            </div>

        </div>
    );
};

export default NavBar;
