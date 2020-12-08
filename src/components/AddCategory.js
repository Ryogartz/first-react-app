import React, { useState } from 'react'
import PropTypes  from 'prop-types';

// Funcion  + props
const AddCategory = ({setCategories , categories}) => {

    const [inputvalue, setinputvalue] = useState('')

    const handleInputValue = (e)=>{
        setinputvalue(e.target.value)
    }

    const handleInputSubmit = (e)=>{
        e.preventDefault()

        if(inputvalue.trim().length > 2){
            setCategories([inputvalue , ...categories])
            // limpiar el value
            setinputvalue('')
        }


    }

    return (
        <form onSubmit={handleInputSubmit}>
            <h2>Add Category</h2>
            <input type="text" 
                  value={inputvalue}
                  onChange={handleInputValue}>               
            </input>
        </form>
    )
}

// prototipos
// definir los protetype
AddCategory.propTypes ={
    setCategories:PropTypes.func.isRequired,
    categories:PropTypes.array.isRequired
} 


export{
    AddCategory
}
