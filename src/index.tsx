import "antd/dist/antd.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { AppRouter } from "./router/AppRouter";

// require("dotenv").config();
export const API_URL = "http://localhost:8080";
export const NODE_PORT = "5000";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </React.StrictMode>
);
