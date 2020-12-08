import React, {useEffect, useState} from 'react'
import { getData } from '../helpers/GetGilf'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

const GifGrid = ({categories}) => {
    // const [images, setimages] = useState([])
    const {data , loading} = useFetchGifs(categories)
    // ejecutar codigo Una vez misma funcion que el cliclo de vida viewMount
    // podemos dejar un arreglo vacio para que se ejecuta una vez O podemos decirlo que se ejecuta
    // cada vez que hay un cambios en 'categories'
    // useEffect(() => {
    //     getData(categories).then(img=>setimages(img))
    // },[categories])

    


    return (
        <>
        <h3>{categories}</h3>
        { loading ? <p className="animate__animated animate__flash"> Cargando... </p> : null}
        <div className="card-grid">           
          {
            data.map(img=>(
                // enviar las props deforma ya independiente sin necesidad de map
               <GifGridItem  key={img.id} {...img}></GifGridItem>
            ))

          }
        </div>
        </>
    )
}

export{
    GifGrid
}
