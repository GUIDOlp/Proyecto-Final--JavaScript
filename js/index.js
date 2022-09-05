// refenciamos los elementos del doc. html
const usuario= document.getElementById("usuario");
const contraseña= document.getElementById("contraseña");
const form= document.getElementById("form");
const ingresar= document.getElementById("submit");

// aqui llamamos al evento submit
form.addEventListener("submit", e=> {
e.preventDefault();
validarUsuario();
validarContraseña();
webStock();
guardarDatos();
})

function validarUsuario() {
  const usuarioValor= usuario.value.trim();
  usuarioValor.length < 5 ? Swal.fire({
    title: "Usuario invalido. Se requiere un minimo de 5 caracteres",
    icon: "error",
    }): false
}

function validarContraseña() {
 const contraseñaValor= contraseña.value.trim();
 contraseñaValor.length < 8 ? Swal.fire({
    title: "Contraseña invalida. Se requiere un minimo de 8 caracteres",
    icon: "error",
    }): false
}
 

function loading() {
   return `<img src="imagenes/ellipse-dots.gif" width="30px">`
}
// SET TIMEOUT Y PROMESA
function webStock() {            
const usuarioValor= usuario.value.trim();
const contraseñaValor= contraseña.value.trim();
if(usuarioValor.length > 5 & contraseñaValor.length > 8) {
    ingresar.innerHTML= loading();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve (window.location.href= 'stock.html');
        }, 3500);
    })
   } 
}     

// AQUI ALMACENAMOS LOS DATOS DEL USUARIO Y CONTRASEÑA POR MEDIO DE LOCAL STORAGE, Y LO CONVERTIMOS A STRING POR JASON.
function guardarDatos() {
    const datos = {
            usuario: usuario.value,
            contraseña: contraseña.value
        }
        localStorage.setItem("login",JSON.stringify(datos));
    }
function recuperarClave() {
    if(localStorage.login) {
    const claveGuardada = JSON.parse(localStorage.getItem("login"))
    console.table(claveGuardada);   
    }
}