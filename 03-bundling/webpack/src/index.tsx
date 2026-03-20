import React from "react";
import "./mystyle.scss"
import { createRoot } from "react-dom/client";
import logo from './content/logo-eiby.png';

const root = createRoot(document.getElementById("root"));
root.render(
    <div className="card-container">
        <img src={logo} alt="logo eiby" />
        <h1>¡Hola Mundo!</h1>
    </div>
);