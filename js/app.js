


const cargarContenido= async () => {
    await fetch('js/productos.json')
   .then((response) => response.json)
   .then((data) => console.table(data));
}

