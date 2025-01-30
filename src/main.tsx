import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import './fonts/fonts.css';

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        {/* App als übergeordnete Route */}
        <Route path="/" element={<App />}>
          {/* Subroutes, die im Outlet von App gerendert werden */}
          <Route index element={null /* Home-Inhalt kann hier hinzugefügt werden */} />
        </Route>
      </Routes>
  </BrowserRouter>
  </StrictMode>,
)
