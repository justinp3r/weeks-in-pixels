import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Routes, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import "./fonts/fonts.css";
import About from "./pages/About.tsx";

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
