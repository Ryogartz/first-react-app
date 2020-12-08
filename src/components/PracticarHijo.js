import React, { useState } from 'react'


const PracticarHijo = ( {practicar, setPracticar} ) => {
    const [practicarinput, setpracticarinput] = useState("")

    const handlerInput = (e)=>{
        console.log(e.target.value)
        setpracticarinput(e.target.value)
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()
        setPracticar([...practicar , practicarinput])
    }

    return (
        <form onSubmit = {handlerSubmit}> 
            <h2>Componente Hijo practica {practicarinput}</h2>
            <input type="text" value={practicarinput} onChange={handlerInput}></input>
        </form>
    )
}

export{
    PracticarHijo
}