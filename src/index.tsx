import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { AppRouter } from "./router/AppRouter";
import 'antd/dist/antd.css';
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
