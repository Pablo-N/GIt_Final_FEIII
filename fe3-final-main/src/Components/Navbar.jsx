import React from 'react'
import {Link} from "react-router-dom"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = (props) => {

  return (
    <header>
      
    <nav>
      <Link to="/home">Home</Link>      
      <Link to="/contact">Contact</Link>
      <Link to="/Favs">Favs</Link>
      <button >Change theme</button>
    </nav>
    </header>
  )
}

export default Navbar