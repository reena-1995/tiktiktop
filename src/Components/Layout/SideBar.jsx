import React from 'react'

export const SideBar = (props) => {
    return (
       
        <main className="d-flex main-div">
            <aside class="sidebar">Sidebar</aside>
            <article class="content">
               {props.main_content}
            </article> 
        </main>
       
    )
}