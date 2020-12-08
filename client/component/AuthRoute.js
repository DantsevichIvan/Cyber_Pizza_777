import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect,Route} from "react-router-dom";
import {getUser} from "../action/authAction";

const AuthRoute = props => {
    const isAuth = useSelector(state=>state.auth.isAuth)
    const isAdmin = useSelector(state=>state.auth.isAdmin)
    const dispatch = useDispatch()
    if(isAuth) {
        dispatch(getUser())
        if(!isAdmin) return <Redirect to='/admin/info'/>
        // return <Redirect to='/admin/products'/>
    }
    else if(!isAuth) return <Redirect to='/admin/login'/>

    return <Route {...props} />
};

export default AuthRoute;
