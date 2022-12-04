import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./utils/globalContext";
// EL SWITCH Y EL USESTATE STAN MOCKEADOS
//TODO: PASAR LOGICA DEL SWITCH THEM BY PROPS

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  // const [switchTheme, setsWitchTheme] = useState(false);
  const { switchTheme, themeState } = useContext(ThemeContext);
  // const handlerSwitchTheme = () => {
  //   setsWitchTheme(!switchTheme);
  // };

  return (
    <header className="navigation">
      <nav className="navigation__container">
        <h1>{`${themeState}`}</h1>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Favs">Favs</Link>
        <label className="switch">
          <input onClick={switchTheme} type="checkbox" />
          <span className="switch__slider round">
            {themeState === "theme--light" ? (
              <FontAwesomeIcon className="switch__sun" icon={faSun} />
            ) : (
              <FontAwesomeIcon className="switch__sun" icon={faMoon} />
            )}
          </span>
        </label>
      </nav>
    </header>
  );
};

export default Navbar;
