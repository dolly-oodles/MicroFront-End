import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Register from "../../../register/register/src/Register";
import Login from "../../../login/login/src/Login";
import { Dashboard } from "../../../dashboard/src/App";

const root = ReactDOM.createRoot(document.getElementById("app"));

const App = () => (

   <BrowserRouter>
    <Routes>
    
    <Route path="/register" element={<Register/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
);
root.render(<App />);