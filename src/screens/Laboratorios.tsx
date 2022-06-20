import { useEffect, useState } from "react"
import Laboratorio from "./labComp/Laboratorio"

interface lab{
  Nombre: String
  id: number
  img: String
  Descripcion?: String

}

interface LabsState{
  Lab:lab[],

}


    const INITIAL_STATE = [

        {
            Nombre: "Fotografia",
            id: 1,
            img: "../../img/camara.jpg",
            Descripcion: "En este laboratorio hay cámaras"
        },
        {
            Nombre: "Almacen",
            id: 2,
            img: "../../img/tijeras.png"
        }
    ]


const Laboratorios = () => {

    const [Lab, setLab] = useState<LabsState["Lab"]>([
    ])
    useEffect(()=>{
    setLab(INITIAL_STATE);
    }, [])

  return (
    <div>
      <Laboratorio Lab={Lab} />
    </div>
  );
};

export default Laboratorios;
