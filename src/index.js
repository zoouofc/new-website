// Package Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Project-defined Imports
import { Routes } from "./Routes.js";
import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>,
);
