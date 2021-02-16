import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store} from './Redux/Store/store';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

export const instance = axios.create({
  baseURL:"https://api-dev.manewayznavigation.com/merchant",
  headers: {"Device-Id":"ART677","Is-Debug":"0","Device-Token":"77tgt467884ghyuj8888uuujjhjgtt","Environment":"SANDBOX","Device-Name":"Note-6","App-Version":"1","Device-type":"WEB"}
});
export const setAuthToken = token => {
    if (token) {
      //applying token
      instance.defaults.headers.common['Authorization'] = token;
    } else {
       //deleting the token from header
       delete instance.defaults.headers.common['Authorization'];
    }
  instance.interceptors.request.use(req=>{
      if(axios.defaults.headers.common['Authorization'])
      return req;
      throw({message:"Token in not available"});
  },
  error=> {
      return Promise.reject(error);
  }
  );
  instance.interceptors.response.use(response=>response,
    error=>{
      const fallbackValue = [
        {userId: "Not authorized",id: "aerw15311sq",
        title: "Please try     again",completed: false}];
      return Promise.reject(fallbackValue);}
    );
 }

  


ReactDOM.render(
   <Provider store={store}>
    <ReactNotification />
    <App />
   </Provider>,
  document.getElementById('root')
);


