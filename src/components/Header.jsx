import { NavLink } from "react-router-dom"

export default function Header(){
    return (

        <>

        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/about">About Me</NavLink>
            </nav>
        </header>
        
        </>

       
      
    )
}