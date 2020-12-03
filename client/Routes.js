import React from 'react';
import {Switch,Route} from "react-router-dom";
import Products from "./containers/Products";
import Categories from "./containers/Categories";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/admin/products" component={Products}/>
            <Route exact path="/admin/categories" component={Categories}/>
        </Switch>
    );
};

export default Routes;
