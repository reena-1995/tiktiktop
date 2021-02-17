import React, { createContext } from 'react'
import FullPage from '../Components/Layout/FullPage';
import Navigation from '../Components/Layout/Navigation';
export const ThemeContext = createContext(""); 

export const Layout = (props) => {
    // This is a wrapper- when page loads first time we provide these components in index or app file
    return (
        <ThemeContext.Provider value={{
            FullPage:FullPage,
            Navigation:Navigation
        }}>
           {/* This is children exm- <App>  */}
           {props.children}
        </ThemeContext.Provider>
    )
}


