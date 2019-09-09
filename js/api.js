export class API {
    // crear un objetos con los datos
    // make a objet with the data
    constructor (artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }
    // consultar la api
    // make a query to the api
    async consultarApi (){
        const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`);
        // esperar la respuesta y convertir a Json
        // wait for the response and convert to Json
        const respuesta = await url.json();
        // retorna la respuesta
        // return the response
        return {
            respuesta
        }
    }
}