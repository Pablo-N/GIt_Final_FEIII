import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./utils/globalContext";

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const { themeState } = useContext(ThemeContext);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div key={id} className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className={`card__side card__side--front ${themeState}`}>
        <div className="card__picture card__picture--3">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--3">
            {name}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            {/* <li><img src="../images/doctor.jpg"/></li> */}
            <li>
              {" "}
              {<b>Name:</b>} {name}
            </li>
            <li>
              {" "}
              {<b>Username:</b>} {username}{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="card__side card__side--back card__side--back-3">
        <div className="card__cta">
          <div className="card__dentist-box">
            <p className="card__dentist-name">{name}</p>
            <button className="card__dentist-favButton">
              {<FontAwesomeIcon icon={faStar} />}
            </button>
          </div>
          <a href="#popup" className="btn btn--white card__btn">
            Book now!
          </a>
          <a href="#popup" className="btn btn--white card__btn">
            Show more details
          </a>
        </div>
      </div>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
