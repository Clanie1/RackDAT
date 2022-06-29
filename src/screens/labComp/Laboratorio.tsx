
import {MdKeyboardArrowDown} from 'react-icons/md'

interface prop{
    Lab: Array<{
        Nombre: String
        id: number
        img: string
        Descripcion?: String
    }>
    }

const Laboratorio = ({Lab}:prop) => {
    
    return (
            <>
                {
                    Lab.map(lab =>{
                        return(
                            <div className="m-5 w-auto h-40 text-center rounded-2xl bg-sky-600">
                                <h3 className="w-20 font-sans flex m-12">{lab.Nombre}</h3>
                                <h5 className="font-sans relative">{lab.Descripcion}</h5>
                                <MdKeyboardArrowDown className="hover:cursor-pointer m-8 float-right" />
                            </div>
                        )
                    })
                }
            </>
    )
}

export default Laboratorio