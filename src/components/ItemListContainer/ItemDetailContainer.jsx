import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { leerProductos } from '../Funciones/funciones'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  
    const [item, setItem] = useState([])
    const id = useParams().id
    console.log(id)


    useEffect(() => {
      leerProductos()
        .then((res) => res.json())
        .then((res) => {
          console.log('Item: ' + id);  
          console.log(res?.results[id]);
          setItem(res?.results[id])
        })
    },[])
  
  
  return (
    <div>
        <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer