import React, { useContext } from "react";
import Card from "../Components/Card";
import { ThemeContext } from "../Components/utils/globalContext";
import { getFavFromStorage } from "../Components/utils/localStorageHandle";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const localFavs = getFavFromStorage();
  const { setData } = useContext(ThemeContext);

  return (
    <main>
      <div className="cardContainer">
        {localFavs.length
          ? localFavs.map((dentistFav) => (
              <Card key={dentistFav.id} dentist={dentistFav} />
            ))
          : null}
      </div>
    </main>
  );
};

export default Favs;
