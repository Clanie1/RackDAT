
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
                            <div className="">
                                <h3 className="">{lab.Nombre}</h3>
                                <h5 className="">{lab.Descripcion}</h5>
                                <button className="">Reservar</button>
                            </div>
                        )
                    })
                }
            </>
    )
}

export default Laboratorio