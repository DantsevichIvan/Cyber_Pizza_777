import React from 'react';
import {Switch, Route} from "react-router-dom";
import Products from "./containers/Products";
import Categories from "./containers/Categories";
import Login from "./containers/Login";
import Registration from "./containers/Registration";
import LogOut from "./containers/LogOut";
import AuthRoute from "./component/AuthRoute";
import Info from "./containers/Info";

const Routes = () => {
    return (
        <Switch>
            <AuthRoute path="/admin/products" >
                <Products/>
            </AuthRoute>
            <AuthRoute path="/admin/categories" >
                <Categories/>
            </AuthRoute>
            {/*<Route path="/admin/products" component={Products}/>*/}
            {/*<Route path="/admin/categories" component={Categories}/>*/}
            <Route path="/admin/login" component={Login}/>
            <Route path="/admin/info" component={Info}/>
            <Route path="/admin/registration" component={Registration}/>
            <Route path="/admin/logout" component={LogOut}/>
        </Switch>
    );
};

export default Routes;
