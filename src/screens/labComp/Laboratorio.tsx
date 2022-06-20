
interface prop{
    Lab: Array<{
        Nombre: String
        id: number
        img: String
        Descripcion?: String
    }>
    }

const Laboratorio = ({Lab}:prop) => {
    
    return (
            <>
                {
                    Lab.map(lab =>{
                        return(
                            <div>
                                <h3>{lab.Nombre}</h3>
                                <h5>{lab.Descripcion}</h5>
                                <button>Reservar</button>
                            </div>
                        )
                    })
                }
            </>
    )
}

export default Laboratorio