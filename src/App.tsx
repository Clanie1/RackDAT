import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App(props: any) {
  return (
    <div className="App h-full w-full">
      <div className="w-4/5 m-auto py-5 space-y-10 max-w-screen-2xl">
        <div className="uppercase text-amber-400 font-bold p-3 bg-white border-2 border-black text-3xl rounded-xl w-fit">
          Pantallas
        </div>
        <div className="flex flex-col space-y-10 m-auto">
          {props.screens.map((screen: any, index: any) => {
            return (
              <Link
                to={screen}
                className=" border-2 border-black rounded-lg px-10 py-5 hover:shadow-lg hover:bg-amber-500 hover:text-white duration-200 font-bold"
              >
                {screen}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
