import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./utils/globalContext";
import {
  getFavFromStorage,
  isFavorited,
  removeFavInStorage,
  setFavInStorage,
} from "./utils/localStorageHandle";

import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const { theme, setData } = useContext(ThemeContext);

  const addFav = () => {
    setFavInStorage({ name, username, id });
    setData(getFavFromStorage());
  };

  const removeFav = () => {
    removeFavInStorage(id);
    setData(getFavFromStorage());
  };

  const favorite = isFavorited(id);

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <div
        className={
          theme === "theme--dark"
            ? `card__side card__side--frontDark`
            : `card__side card__side--front`
        }
      >
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
            <button
              className={
                favorite
                  ? `card__dentist-favButton card__dentist-favButton--Nofav`
                  : "card__dentist-favButton card__dentist-favButton--fav"
              }
              onClick={favorite ? removeFav : addFav}
            >
              <FontAwesomeIcon icon={faStar} />
            </button>
          </div>

          <Link to={`/dentist/${id}`} className="btn btn--white card__btn">
            Show more
          </Link>
        </div>
      </div>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {/* <button onClick={addFav} className="favButton">Add fav</button> */}
    </div>
  );
};

export default Card;
