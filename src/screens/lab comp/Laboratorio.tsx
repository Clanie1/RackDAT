import { useState } from "react"


const Laboratorio = () => {

    interface lab {
        Nombre: String
        id: number
        img: String
        Descripcion?: String
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

    const [Lab, setLab] = useState<lab[]>([
    ])

    setLab(INITIAL_STATE)

    return (
        Lab.map(Lab => {
            <div>
                <h3>{Lab.Nombre}</h3>
                <h5>{Lab.Descripcion}</h5>
                <button></button>

            </div>
        })
    )
}

export default Laboratorio