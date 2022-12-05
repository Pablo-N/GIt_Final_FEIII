import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useContext } from "react";
import { GlobalContext, ThemeContext } from "./Components/utils/globalContext";

function App(props) {
  const { themeState } = useContext(ThemeContext);
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
