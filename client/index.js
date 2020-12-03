import React from 'react'
import {render} from 'react-dom'
import App from "./App";
import {Provider} from "react-redux";
import admin from "./store";
import {HashRouter} from "react-router-dom";


render(
    <HashRouter>
        <Provider store={admin}>
            <App/>
        </Provider>
    </HashRouter>
    ,
    document.getElementById('root')
)
