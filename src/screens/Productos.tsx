import ListaProductos from "../components/Productos/ListaProductos";
import { IoMdSearch } from "react-icons/io";

const Productos = () => {
  return (
    <div className="w-full h-full">
      {/* Seccion de Productos y buscador */}
      <div className="w-5/6 m-auto">
        <div className="py-10 flex items-center flex-col space-y-10">
          <h1 className="text-center font-bold text-6xl text-amber-500 uppercase">
            Productos
          </h1>
          <div className=" flex  bg-gray-100/75 shadow-lg border-black/150 w-1/2 pl-3 rounded-3xl overflow-hidden items-center">
            <input
              type="text"
              className="w-full py-2 outline-none bg-transparent"
            />
            <div className="h-10 box-border px-1 rounded-3xl flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500">
              <IoMdSearch className="h-8 w-8 text-white cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Catalogo de Productos */}
        <ListaProductos />
      </div>
    </div>
  );
};

export default Productos;
