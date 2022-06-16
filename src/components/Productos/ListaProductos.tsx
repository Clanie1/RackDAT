import CategoriaLab from "./CategoriaLab";

const lista = [
  {
    laboratorio: "Laboratorio 1",
    productos: [
      {
        nombre: "Producto 1",
        isponible: true,
      },
    ],
  },
];

const ListaProductos = () => {
  return (
    <div className="flex-col space-y-5">
      <CategoriaLab />
      <CategoriaLab />
      <CategoriaLab />
    </div>
  );
};

export default ListaProductos;
