export class Interfaz {
    constructor (artista, cancion){
        // toma los elementos necesarios
        // takes the needed element
        this.formulario = document.getElementById("formulario");
        this.mensaje = document.getElementById("mensaje");
        this.divResultados = document.getElementById("resultado");
        this.loading = document.getElementById("spinnerLoading");
        this.busqueda = document.getElementById("busqueda");
    }
    // muestra un mensaje en un div de la interfaz
    // show a message in a div element in the interface
    mostrarMensaje(mensaje, tipo) {
        this.mensaje.style.display = "block";
        this.mensaje.innerHTML = mensaje;
        this.mensaje.classList.remove("alert-primary");
        this.mensaje.classList.add(`alert-${tipo}`);
        setTimeout(() => {
            this.mensaje.innerHTML = "Espero su busqueda!";
            this.mensaje.classList.remove(`alert-${tipo}`);
            this.mensaje.classList.add(`alert-primary`);
            if(tipo == "success") {
                this.mensaje.style.display = "none";
            }       
        }, 3000);
    }
}