import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./screens/Productos";
import Laboratorios from "./screens/Laboratorios";
import Inicio from "./screens/Inicio";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/laboratorios" element={<Laboratorios />} />
    </Routes>
  </BrowserRouter>
);
