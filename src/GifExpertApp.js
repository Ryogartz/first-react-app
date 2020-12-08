import  React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Dragon ball'])

     return(
          <div>

              <h2>GifExpertApp</h2>
              {/* componente */}
              <AddCategory setCategories={setCategories} categories = {categories} />
              <hr />

              <ol>
                    {categories.map((value,index)=>(
                        <GifGrid 
                        key={value}
                        categories={value}  />
                    ))
                    }
              </ol>

          </div>
        );
}

export{
    GifExpertApp
}

