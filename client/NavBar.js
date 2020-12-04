import React from 'react';
import {NavLink} from "react-router-dom";
import './style/navBar.css'

const NavBar = () => {
    return (
        <div className='header'>
            <NavLink to='/admin/categories'>Categories</NavLink>
            <NavLink to='/admin/products'>Products</NavLink>
        </div>
    );
};

export default NavBar;
