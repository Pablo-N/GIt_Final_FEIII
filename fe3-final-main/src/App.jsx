import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useContext, useEffect } from "react";
import { GlobalContext, ThemeContext } from "./Components/utils/globalContext";

function App(props) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });

  return (
    <GlobalContext>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </GlobalContext>
  );
}

export default App;
