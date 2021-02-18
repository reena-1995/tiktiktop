import React from 'react'
import '../../Components/style.css' 
import {Header} from '../Layout/Header';
import {Footer} from '../Layout/Footer';
import {SideBar} from '../Layout/SideBar';

const Navigation = (props) => {
    return (
        <>
        <div>
          <Header/>
           <SideBar main_content={props.children}/>
          <Footer/>
        </div>
        
        </>
    )
}

export default Navigation
