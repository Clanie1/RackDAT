const CategoriaLab = () => {
  return (
    <div className="flex flex-col space-y-7">
      {/* Titulo Seccion */}
      <h1 className="uppercase font-bold text-amber-400/100 text-3xl">
        Laboratorio 1
      </h1>
      {/* Lista de Productos */}
      <div className="flex space-x-2">
        {/* Un Producto */}
        <div className="bg-[url('./img/tijeras.png')] bg-center bg-contain bg-no-repeat cursor-pointer border-2 border-black rounded-[30px] w-60 px-3 py-2 space-y-20 flex flex-col justify-around font-bold hover:shadow-lg hover:translate-y-1 duration-75 hover:shadow-amber-500">
          <div>
            <span className="text-lg">Tijeras</span>
          </div>
          <div className="flex items-center space-x-2 justify-end">
            <div>
              <span>Disponible</span>
            </div>
            <div className="bg-green-500 rounded-full w-3 h-3"></div>
          </div>
        </div>
        <div className="bg-[url('./img/tijeras.png')] bg-center bg-contain bg-no-repeat cursor-pointer border-2 border-black rounded-[30px] w-60 px-3 py-2 space-y-20 flex flex-col justify-around font-bold hover:shadow-lg hover:translate-y-1 duration-75 hover:shadow-amber-500">
          <div>
            <span className="text-lg">Tijeras</span>
          </div>
          <div className="flex items-center space-x-2 justify-end">
            <div>
              <span>Disponible</span>
            </div>
            <div className="bg-green-500 rounded-full w-3 h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriaLab;
