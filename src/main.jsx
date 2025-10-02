import React from "react";
import ReactDOM from "react-dom/client";
// ✅ sahi

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from "./App.jsx";

let entryPoint= ReactDOM.createRoot(document.querySelector(".root"));

entryPoint.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);