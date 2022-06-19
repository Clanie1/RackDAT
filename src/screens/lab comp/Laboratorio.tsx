import { useState } from "react"


const Laboratorio = () => {
    const [Lab, setLab] = useState([
        {
            Nombre: "Fotografia",
            id: 1,
            img: "../../img/camara.jpg"
        }
    ])
    return (
        <div>
            {/* <h3>{Lab.Nombre}</h3> */}
            <h5></h5>
            <button></button>

        </div>
    )
}

export default Laboratorio