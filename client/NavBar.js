import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <NavLink to='/admin/categories'>Categories</NavLink>
            <NavLink to='/admin/products'>Products</NavLink>
        </div>
    );
};

export default NavBar;
