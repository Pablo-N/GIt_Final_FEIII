import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/main.css';
import App from './App';
import Home from './Routes/Home'
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import {ContextProvider} from "./Components/utils/global.context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route index path="/home" element={<Home />} />
            <Route index path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
        </Routes>
      </BrowserRouter>  

  </React.StrictMode>
);


