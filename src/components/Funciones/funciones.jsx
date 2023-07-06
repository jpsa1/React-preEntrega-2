export const leerProductos = (categoria) => {
    
    console.log('Esto vale categoria: ' + categoria);
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}`)
}

