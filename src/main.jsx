import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// Self-hosted fonts (no CDN): Archivo variable (incl. width axis) for display
// and body; IBM Plex Mono for technical labels, tags and captions.
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "./styles.css";

// Theme preview switch for palette decisions: ?theme=blueprint | paperink,
// persisted so internal navigation keeps it; ?theme=default clears.
{
  const q = new URLSearchParams(window.location.search).get("theme");
  if (q === "default") localStorage.removeItem("elmac-theme");
  else if (q) localStorage.setItem("elmac-theme", q);
  const t = localStorage.getItem("elmac-theme");
  if (t) document.documentElement.dataset.theme = t;
}

// BrowserRouter with real paths: the build step copies index.html into each
// route directory (plus 404.html) so GitHub Pages serves every URL with a 200.
// basename comes from Vite's base — the Pages sub-path today, "/" once
// the custom domain is attached.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
