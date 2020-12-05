import React from 'react';
import {Link} from "react-router-dom";
import '../style/ViewProducts.css'


const ViewProducts = () => {
    function openClass(e) {
        e.target.classList.toggle('open')
    }
    return (
       <Link to='#' className={'arrow-down-close'} onClick={(e)=>openClass(e)}/>
    );
};

export default ViewProducts;
