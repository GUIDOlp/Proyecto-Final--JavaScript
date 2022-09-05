const tabla= document.getElementById("tabla")
const buscarProducto= document.querySelector("#buscarProducto");
const celdas= document.getElementsByTagName("tr");

// declaramos una clase, en donde podamos registrar los siguientes datos
class Producto {
    constructor(id, nombre, stock, precio) {
        this.id= id;
        this.nombre= nombre.toUpperCase();
        this.stock= stock;
        this.precio= parseInt(precio);
    }
    // agregamos dos metodos a la clase
    precioConiva() {
        let precioFinal= this.precio * 1.21
        return "$" + precioFinal;
    }
    cantidadArestar(unidades) {
        this.stock= this.stock - unidades;
    }
}
// declaramos un array vacio
let carrito= [];
const productos= [];

// instanciamos la clase y agregamos productos al array
productos.push(new Producto(877, "crema facial", 30, 1200, "fa-solid fa-cart-shopping"))
productos.push(new Producto(31, "shampoo", 20 , 1800, "fa-solid fa-cart-shopping"))
productos.push(new Producto(748, "labial", 60 , 1200, "fa-solid fa-cart-shopping"))
productos.push(new Producto(846, "delineador de ojos", 25 , 1000, "fa-solid fa-cart-shopping"))
productos.push(new Producto(948, "sombra de ojos", 18 , 1400, "fa-solid fa-cart-shopping"))
productos.push(new Producto(715, "velas aromaticas", 10 , 2500, "fa-solid fa-cart-shopping"))
productos.push(new Producto(777, "acondicionador", 8 , 1700, "fa-solid fa-cart-shopping"))
productos.push(new Producto(317, "jabon", 14 , 1200, "fa-solid fa-cart-shopping"))
productos.push(new Producto(969, "base solida", 18 , 1300, "fa-solid fa-cart-shopping"))
// ordenamos alfabeticamente el array de objetos por medio del nombre.
productos.sort((a,b) => {
    if(a.nombre > b.nombre) {
        return 1
    }
    if(a.nombre < b.nombre) {
        return -1
    }
    return 0
})
// AQUI CARGAREMOS DE FORMA DINAMICA CADA UNO DE LOS OBJETOS DE NUESTRO ARRAY PRODUCTOS
function cargarTabla () {
    productos.forEach((prod) => {
     tabla.innerHTML+= `<tr>
                           <td data-titulo= "id">${prod.id}</td>
                           <td data-titulo= "nombre">${prod.nombre}</td>
                           <td data-titulo= "stock">${prod.stock}</td>
                           <td data-titulo= "precio">$${prod.precio}</td>
                           <td data-titulo= "precio final">${prod.precioConiva()}</td>
                           <td data-titulo= "carrito"><button id="agregar${prod.id}" class="boton-agregar"><i class="fa-solid fa-cart-shopping"></i></button></td>
                           </tr>`;  
    })
    agregarFuncionalidad();
} 
function agregarFuncionalidad() {
    productos.forEach((prod) => {
        document.getElementById(`agregar${prod.id}`)
        .addEventListener("click", (e)=> {
            e.preventDefault()
            Swal.fire({
                title: "Producto agregado al carrito",
                icon: "success",
                width: 450,
                timer: 4000,
                toast: true,
            });
            console.log(prod);
            agregarAlCarrito(prod);
        })
    })
} 
cargarTabla();

// hacemos una busqueda del producto
buscarProducto.addEventListener("keyup" , e=> {
    let texto= e.target.value
    let expresionRegular= new RegExp(texto, "i")
    for(let i= 0 ;  i < celdas.length; i++) {
        let valor= celdas[i]
        // operador ternario
     expresionRegular.test(valor.innerText)? valor.classList.remove("ocultar"): valor.classList.add("ocultar")
    }
})

// calcular stock
function calcularStock () {
    let restarStock= document.querySelector(`${prod.stock}`)
    productos.forEach((prod) => {
    document.getElementById(`agregar${prod.id}`)
    .addEventListener("click", () => {
        restarStock.innerText= prod.stock--;
    })
    })
    return restarStock;
}

// ALMACENAMOS NUESTRO ARRAY DE PRODUCTOS EN STORAGE, Y POSTERIORMENTE OBTENEMOS NUESTRO ARRAY
const guardarArray= (clave, valor) => {
    localStorage.setItem(clave, valor);
}
guardarArray("listaProductos", JSON.stringify(productos));

function recuperarDeLS() {
    const recuperarArray= JSON.parse(localStorage.getItem("listaProductos")); 
    console.table(recuperarArray);
}
