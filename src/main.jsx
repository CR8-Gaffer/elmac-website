import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// BrowserRouter with real paths: the build step copies index.html into each
// route directory (plus 404.html) so GitHub Pages serves every URL with a 200.
// basename comes from Vite's base — "/elmac-website/" on Pages today, "/" once
// the custom domain is attached.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
