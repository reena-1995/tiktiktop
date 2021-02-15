import React from 'react'
import {ThemeContext} from './Context/ThemeContext';
import  {Login,Register} from './Components';
import { BrowserRouter, Switch, Route} from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route> 
                <Route exact path="/register">
                    <Register/>
                </Route>   
            </Switch>
        </BrowserRouter>
    )
}

export default Router
