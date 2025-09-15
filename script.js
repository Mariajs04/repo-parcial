const baseURL = 'https://api.thecatapi.com/v1/'
const endpoint = 'images/search'
const url = `${baseURL}${endpoint}`

const contenedor = document.getElementById('contenedorImagen');

function cargarGato() {
  fetch(url)
    .then(response => response.json())
    .then(datos => {
      const gato = datos[0];
      const img = document.createElement("img");
      img.src = gato.url;
      img.style.maxWidth = "300px";
      
      contenedorImagen.innerHTML = ""; 
      contenedorImagen.appendChild(img);
  
})}

cargarGato();



