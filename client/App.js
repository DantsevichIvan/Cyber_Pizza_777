import React from 'react';
import Routes from "./Routes";
import NavBar from "./NavBar";
import './style/App.css'

const App = () => {
    return (
        <div className='wrap'>
            <NavBar/>
            <Routes/>
        </div>
    );
};

export default App;
