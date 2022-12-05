import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./utils/globalContext";

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "theme--dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  return (
    <header className="navigation">
      <nav className="navigation__container">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Favs">Favs</Link>
        <label className="switch">
          <input onClick={changeTheme} type="checkbox" />
          <span className="switch__slider round">
            {isDarkMode === "theme--light" ? (
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
