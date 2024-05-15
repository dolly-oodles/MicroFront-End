import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Register from "./Register";

const root = ReactDOM.createRoot(document.getElementById("app"));

const App = () => (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={ <Register />}/>
  </Routes>
  </BrowserRouter>
  

);

root.render(<App />);
