import React from 'react'
import {render} from 'react-dom'
import App from "./App";
import {Provider} from "react-redux";
import admin from "./store";
import {BrowserRouter as Router} from "react-router-dom";


render(
    <Router>
        <Provider store={admin}>
            <App/>
        </Provider>
    </Router>
    ,
    document.getElementById('root')
)
