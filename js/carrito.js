const carritoIcon= document.querySelector("#icono-carrito");
const contenedorCarrito= document.querySelector(".cart");
const temp= document.querySelector("#cart-act");
const closeCart= document.querySelector("#close-cart");
const contadorCarrito= document.querySelector("#contadorCarrito")
// abrir icono carrito
carritoIcon.addEventListener("click", () => {
    contenedorCarrito.classList.add("active")
})

// cerrar icono carrito
temp.addEventListener("click", () => {
    contenedorCarrito.classList.remove("active")
})

// funcionalidad para remover productos del carrito


// agregar productos al carrito
function agregarAlCarrito(prod) {
    let existe= carrito.some((productoSome) => productoSome.id === prod.id);
     if(existe === false) {
       prod.cantidad= 1;
       carrito.push(prod);
    } else{
        let prodFind= carrito.find((productoFind) => productoFind.id === prod.id);
        prodFind.cantidad++;
    }
   console.log(carrito);
   renderizarCarrito();
}

function renderizarCarrito() {
    contenedorCarrito.innerHTML= "";
    let totalCarrito= calcularSuma();
    carrito.forEach(prod => {
        contenedorCarrito.innerHTML+= `<div style= "padding: 10px; border: 2px solid black";>
        <h4 style= "margin-left: 20px;">${prod.nombre.toLowerCase()}</h4>
        <div style="display: flex; justify-content:space-between;">
        <p style= "margin-left: 20px;"> Id: ${prod.id}</p>
        <p>Cantidad: ${prod.cantidad}</p>
        <p>Precio: ${prod.precioConiva()}</p></div>
        <p style= "margin-left: 20px;" class="total">Total:$${totalCarrito}</p>
        <button style= "margin-left: 20px;" id="agregar${prod.id}">Borrar</button>
        <i id="close-cart" class="fa-solid fa-xmark"></i>
        </div>`;   
    })
    contadorCarrito.innerText= carrito.length;
    borrarProducto();
}

function borrarProducto() {
    carrito.forEach((prod) => {
        document.querySelector(`#agregar${prod.id}`)
        .addEventListener("click", () => {
        carrito= carrito.filter((productoFilter) => productoFilter.id !== prod.id);
        renderizarCarrito();
        });
    });  
}

function cerrarPestaña() {
        carrito.forEach((prod) => {
        document.querySelector(`#close-cart`)
        .addEventListener("click", () => {
        carrito= carrito.filter((productoFilter) => productoFilter.id !== prod.id);
        renderizarCarrito();
        });
    });  
}
function calcularSuma() {
  let sumaTotal = 0;
  carrito.forEach(e => {
    sumaTotal+= e.precio *1.21;
  }) 
  return sumaTotal;
}
