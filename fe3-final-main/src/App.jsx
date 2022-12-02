
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
