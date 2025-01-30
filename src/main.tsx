import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Routes, Route } from "react-router";
import {HashRouter } from 'react-router-dom';
import './fonts/fonts.css';

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <HashRouter>
    <Routes>
        {/* App als übergeordnete Route */}
        <Route path="/" element={<App />}>
          {/* Subroutes, die im Outlet von App gerendert werden */}
          <Route index element={null /* Home-Inhalt kann hier hinzugefügt werden */} />
        </Route>
      </Routes>
  </HashRouter>
  </StrictMode>,
)
