import React from 'react'
import {Link} from "react-router-dom"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/dentist">Dentist</Link>
      <Link to="/contact">Contact</Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar