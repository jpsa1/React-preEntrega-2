import React from 'react'
import Item from './Item';

const ItemList = ({dato}) => {

    console.log(dato);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {dato && dato.map((res, id) => {
 

        return <Item producto={res} key={res.id} id={id} />
        
        }
        )}
    </div>
  )
}


export default ItemList