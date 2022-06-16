import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-black px-4 w-full">
      <div className="flex w-11/12 justify-between m-auto">
        <div className="bg-[url('./img/LogoCetysBlanco.png')] bg-contain bg-no-repeat bg-center w-10 text-white border-white p-10"></div>
        <div className="flex items-center justify-center space-x-5">
          <Link
            to="/inicio"
            className="text-white px-2 py-1 rounded-lg font-bold outline-white outline-1 hover:outline hover:bg-white hover:text-black duration-100"
          >
            inicio
          </Link>
          <Link
            to="/productos"
            className="text-white px-2 py-1 rounded-lg font-bold outline-white outline-1 hover:outline hover:bg-white hover:text-black duration-100"
          >
            Productos
          </Link>
          <Link
            to="/laboratorios"
            className="text-white  px-2 py-1 rounded-lg font-bold outline-white outline-1 hover:outline hover:bg-white hover:text-black duration-100"
          >
            Laboratorios
          </Link>
          <Link
            to="/calendario"
            className="text-white px-2 py-1 rounded-lg font-bold outline-white outline-1 hover:outline hover:bg-white hover:text-black duration-100 "
          >
            Calendario
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
