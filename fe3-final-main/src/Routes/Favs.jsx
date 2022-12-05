import React from "react";
import Card from "../Components/Card";
import { getFavFromStorage } from "../Components/utils/localStorageHandle";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const localFavs = getFavFromStorage();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="cardContainer">
        {localFavs.length
          ? localFavs.map((dentistFav) => (
              <Card key={dentistFav.id} dentist={dentistFav} />
            ))
          : null}
      </div>
    </>
  );
};

export default Favs;
