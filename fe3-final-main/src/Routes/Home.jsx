import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";

import { ThemeContext } from "../Components/utils/globalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
const [dentists, setDentists] = useState([]);

 const {data} = useContext(ThemeContext) 

 useEffect(()=>{
  
 setDentists(data)

 });

  return (
    //card-grid
    <main>
      
      <div className="cardContainer">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
