import React, {useEffect} from 'react';
import Routes from "./Routes";
import NavBar from "./NavBar";
import {getUser} from "./action/authAction";
import {useDispatch, useSelector} from "react-redux";
import './style/App.css'


const App = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth.isAuth)
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch,auth])

    return (
        <div className='wrap'>
            <NavBar/>
            <Routes/>
        </div>
    );
};

export default App;
