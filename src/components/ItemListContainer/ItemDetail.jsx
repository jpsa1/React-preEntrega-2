import React from 'react'

const ItemDetail = ({item}) => {
  
    const estilo = {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAling: 'center'
    }

    return (
    <div >
        <div style={estilo}>
            <h1>{item.title}</h1>
            <img width={500} src={item.thumbnail} />
            <h5>{}</h5>
            <h2>Precio: {item.price}</h2>
            <h4>Condicion: {item.condition}</h4>
        </div>
    
    
    </div>
  )
}

export default ItemDetail