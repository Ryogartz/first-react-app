import { useEffect, useState } from "react"
import { getData } from "../helpers/GetGilf";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        getData(category).then(img=>{
            setstate({
            data:img,
            loading:false
        })
    })
    }, [category])

    // setTimeout(()=>{
    //     setstate({
    //         data:[1,2,3,4,5,6],
    //         loading:false
    //     })
    // },3000)

    return state; //{data[] , loading:true}

}
