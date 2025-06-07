import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Rasavilas-Frontend/">
      <div className="container bg-secondary max-w-full ">
        <div className="max-w-7xl mx-auto">
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
