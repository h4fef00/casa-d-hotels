import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import "./index.css";
import "./i18n.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  </StrictMode>
);
