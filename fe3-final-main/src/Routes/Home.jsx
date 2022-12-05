import { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  //const [dentists , setDentists] = React.useState([]);

  const [dentists, setDentists] = useState([]);

  const handleFetchRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonResponse = await response.json();
    setDentists([...jsonResponse]);
  };

  useEffect(() => {
    handleFetchRequest();
  }, []);

  return (
    //card-grid
    <main>
      <h1>Home</h1>
      <div className="cardContainer">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
