import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const screens = [
  "Inicio",
  "Productos",
  "Registro",
  "Productos",
  "Registro",
  "Cuenta",
  "Laboratorios",
  "Carrito",
  "EditarPerfil",
  "Producto",
  "Laboratorio",
  "EditarProducto",
  "AdminItems",
  "FormularioLaboratorio",
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App screens={screens} />} />
      {screens.map((screen, index) => {
        return (
          <Route
            key={index}
            path={`/${screen}`}
            element={`<div>${screen}</div>}`}
          />
        );
      })}
    </Routes>
  </BrowserRouter>
);
