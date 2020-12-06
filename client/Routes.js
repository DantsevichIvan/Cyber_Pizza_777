import React from 'react';
import {Switch,Route} from "react-router-dom";
import Products from "./containers/Products";
import Categories from "./containers/Categories";
import Login from "./containers/Login";
import Registration from "./containers/Registration";
import LogOut from "./containers/LogOut";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/admin/products" component={Products}/>
            <Route exact path="/admin/categories" component={Categories}/>
            <Route exact path="/admin/login" component={Login}/>
            <Route exact path="/admin/registration" component={Registration}/>
            <Route exact path="/admin/logout" component={LogOut}/>
        </Switch>
    );
};

export default Routes;
