import { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  //const [dentists , setDentists] = React.useState([]);

  const [dentists, setDentists] = useState([]);

  const handleFetchRequest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonResponse = await response.json();
    setDentists([...jsonResponse])
  }

  useEffect(() => {
    handleFetchRequest();
  }, [])




  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <div className="card__details">
            <ul>
              <li><img src="../images/doctor.jpg"/></li>
              <li>Name: {dentist.name}</li>
              <li>Username:{dentist.username} </li>
            </ul>
            <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">{dentist.name}</p>
                  </div>
                  <a href="#popup" className="btn btn--white">Book now!</a>
                  <a href="#popup" className="btn btn--white">Show more details</a>
                </div>
              </div>
          </div>
          
        ))}
    </div>
    </main >
  )
}

export default Home