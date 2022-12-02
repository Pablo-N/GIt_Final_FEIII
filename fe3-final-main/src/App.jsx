
import { Outlet } from "react-router-dom";
import Footer from "./Components/Navbar";
import Navbar from "./Components/Footer";


function App() {
  return (
      <div className="dark">
          <Navbar/>
           <main>
          <Outlet />
        </main>
          <Footer/>
      </div>
  );
}

export default App;
