import React from 'react';
import {NavLink} from "react-router-dom";
import './style/navBar.css'
import LogOut from "./containers/LogOut";
import {useSelector} from "react-redux";

const NavBar = () => {
    const isAuth = useSelector(state=>state.auth.isAuth)
    const name = useSelector(state=>state.auth.name)
    return (
        <div className='header'>
            <div className='header_container'>
                <div className='header_title'>
                    <h2>Administrator</h2>
                    {isAuth ?  <span>{name}</span> :null}
                </div>
                <div className='header_links'>
                    <NavLink to='/admin/categories'>Categories</NavLink>
                    <NavLink to='/admin/products'>Products</NavLink>
                </div>
            </div>

            {
               isAuth ? <LogOut/>: null
            }
        </div>
    );
};

export default NavBar;
