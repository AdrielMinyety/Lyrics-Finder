// se importa 'interfaz.js' y 'api.js'
// import 'interfaz.js' and 'api.js'
import { Interfaz } from './interfaz.js';
import { API } from './api.js';
// instanciamos la clase 'Interfaz' desde 'interfaz.js'
// instatiate the class 'Interfaz' from 'interfaz.js'
const UI = new Interfaz();
// detecta el evento 'enviar'
// detect the event 'submit'
UI.formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const artista = UI.formulario.querySelector("#artista").value;
    const cancion = UI.formulario.querySelector("#cancion").value;
    // validar si los datos vienen vacios
    // validate if the datas are empties
    if (artista === '' || cancion === '') {
        UI.mostrarMensaje("Los campos son necesarios para la busqueda...", "warning");
    } else {
        const api = new API(artista, cancion);
        api.consultarApi()
           .then(data => {
                // si hay letras, imprimirla
                // if there is lyrics, print 
               if (data.respuesta.lyrics) {
                    // oculta el spinner de 'cargando'
                    // hide the 'loading' spinner
                    UI.loading.style.display = "none";
                    // muestra mensaje
                    // show message
                    UI.mostrarMensaje("Se ha encontrado la letra", "success");
                    let letra = data.respuesta.lyrics;
                    // imprime los resultados
                    // print results
                    UI.busqueda.innerHTML = `${api.artista} - ${api.cancion}`;
                    UI.divResultados.textContent = letra;
                } else {
                    // si no hay letras, mostrar mensaje y limpiar formulario
                    // if there's not lyrics, show message and reset the form
                    UI.mostrarMensaje("Canción no encontrada", "danger");
                    UI.formulario.reset();
                }
           })
    }
    
});

