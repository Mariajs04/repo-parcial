const baseURL = 'https://api.thecatapi.com/v1/'
const endpoint = 'images/search'
const url = `${baseURL}${endpoint}`


/*fetch(url)
.then(response => response.json())
.then(datos => console.log(datos))*/


const contenedor = document.getElementById('contenedorImagen');
const boton = document.getElementById('nuevoGato');

function cargarGato() {
  fetch(url)
    .then(response => response.json())
    .then(datos => {
      const gato = datos[0];
      const img = document.createElement("img");
      img.src = gato.url;
      img.alt = "Un lindo gato";
      img.style.maxWidth = "300px";
      document.body.appendChild(img);
  
})}


// Cargar un gato al iniciar la página
cargarGato();

// Cargar uno nuevo al hacer clic en el botón
/*boton.addEventListener('click', cargarGato);*/

