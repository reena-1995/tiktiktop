import React,{useContext} from 'react'
import {ThemeContext} from './Context/ThemeContext';
import  {Login,Register,Dashboard} from './Components';
import { Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {history} from './history';


export const AppRouter = (props) => {
    const context    = useContext(ThemeContext);
    const FullPage   = context.FullPage;
    const Navigation = context.Navigation;
    const isFullPage = props.full_page;
    const Component  = props.component;
    return (
    <>  
        <Route exact path={props.path}>
            {
                isFullPage ?
                 <FullPage>
                   <Component/>
                 </FullPage>
                :
                 <Navigation>
                  <Component/>  
                 </Navigation>

            }
        </Route>   
    </>
    )
}



const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <AppRouter exact path="/login" component ={Login} full_page/>
                <AppRouter exact path="/register" component={Register}full_page/>
                <AppRouter exact path="/dashboard" component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
