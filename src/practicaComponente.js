import React, { useState } from 'react'
import {PracticarHijo} from './components/PracticarHijo'

const Nombres = ['Bryan', 'Carlos' , 'Maria'];
const PracticaComponente = () => {
    const [practicar, setPracticar] = useState(['Bryan', 'Carlos' , 'Maria'])
     
    const agregarNombre = () =>{
        setPracticar([...practicar , 'Javier'])
    }

    return (
        <div>
            <PracticarHijo practicar={practicar} setPracticar={setPracticar} />

            <button onClick={agregarNombre}>Agregar</button>
            <ul>
                {practicar.map((value,index)=>{
                    return <li key={value}>{value}</li>
                })}
            </ul>

        </div>
    )

}

export{
    PracticaComponente
}

