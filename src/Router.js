import React,{Suspense} from 'react'
import {ThemeContext} from './Context/ThemeContext';
import  {Login,Register} from './Components';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import {history} from './history';
const LoginComponent = React.lazy(() => Login);

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/login">
                   <Suspense fallback={<div>Loading...</div>}>
                     <LoginComponent/>
                    </Suspense>
                </Route> 
                <Route exact path="/register">
                    <Register/>
                </Route>   
            </Switch>
        </BrowserRouter>
    )
}

export default Router
