import React, { useEffect, useState } from 'react'
import { leerProductos } from '../Funciones/funciones'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [dato, setDato] = useState([])
    let categoria = useParams().id
    

    
    useEffect(() => {
        
        
        leerProductos(categoria)
        .then((res) => res.json())
        .then((res) => setDato(res))

    },[categoria])

    dato && console.log(dato.results)
    
    return (
            <div>
                <h4 style={{color:'lightblue', fontSize:'50px', textAlign:'center'}}>{props.titulo}</h4>
                <ItemList dato={dato.results}/>
            </div>
    )
}

export default ItemListContainer