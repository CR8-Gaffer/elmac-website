import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";

// HashRouter: works identically on GitHub Pages' /elmac-website/ subpath and
// on a custom domain, with no server-side fallback config. Swap to
// BrowserRouter + a 404.html fallback once the custom domain is attached if
// clean paths are preferred.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
