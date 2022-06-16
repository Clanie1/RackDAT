import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="w-3/4 flex items-center justify-center flex-col m-auto space-y-10">
        <h1 className="text-amber-500 font-bold text-3xl">Pantallas</h1>
        <div className="flex flex-col space-y-3 items-center">
          <Link
            to="/productos"
            className="border-2 py-2 px-5 w-fit rounded-lg hover:shadow-lg"
          >
            Productos
          </Link>
          <Link
            to="/laboratorios"
            className="border-2 py-2 px-5 w-fit rounded-lg hover:shadow-lg"
          >
            Laboratorios
          </Link>
          <Link
            to="/inicio"
            className="border-2 py-2 px-5 w-fit rounded-lg hover:shadow-lg"
          >
            inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
