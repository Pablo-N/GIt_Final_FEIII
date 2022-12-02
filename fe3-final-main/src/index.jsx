import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './Routes/Home'
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
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
    </ContextProvider>

  </React.StrictMode>
);


