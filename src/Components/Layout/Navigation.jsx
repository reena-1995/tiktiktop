import React from 'react'
import '../../Components/style.css' 

const Navigation = (props) => {
    return (
        <>
        <div>
          <header>
               
          </header>
          <main>
            <p>main</p>  
            {props.children}  
          </main>
          <footer>
              <p>footer</p>
          </footer>
        </div>
        
        </>
    )
}

export default Navigation
