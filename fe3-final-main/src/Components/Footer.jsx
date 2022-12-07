import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "./utils/globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFacebook} from "@fortawesome/free-solid-svg-icons"
import {faFacebook, faInstagram, faTiktok, faWhatsapp} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);

  const isDarkMode = theme === "theme--dark" || false;

  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  return (
    <footer className={
      theme === "theme--light"
        ? "footer footer__light"
        : "footer footer__dark"
    }>

      <div className="footer__container">
        <div>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' />
        </div>

       <div className="footer__container footer__container__icons">
        <a href='#' className='white__letter'>{<FontAwesomeIcon icon= {faFacebook} />}</a>
        <a href='#' className='white__letter'>{<FontAwesomeIcon icon= {faInstagram}/>}</a>
        <a href='#' className='white__letter'>{<FontAwesomeIcon icon= {faTiktok} />}</a>
        <a href='#' className='white__letter'>{<FontAwesomeIcon icon= {faWhatsapp} />}</a>
       </div>
      </div>

    </footer>
  )
}

export default Footer
