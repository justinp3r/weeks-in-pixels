import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Routes, Route } from "react-router";
import {HashRouter } from 'react-router-dom';
import './fonts/fonts.css';
import About from './pages/about.tsx';

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <HashRouter> 
    <Routes>
        {/* App als übergeordnete Route */}
        <Route path="/" element={<App />}>
          {/* Subroutes, die im Outlet von App gerendert werden */}
          <Route path="about" element={<About/>} />
        </Route>
      </Routes>
  </HashRouter>
  </StrictMode>,
)
