
/**
 * Captura de elementos del DOM
 */
const formularioBuscar = document.querySelector('#formularioBuscar');
const seccionFotos = document.querySelector('#seccionFotos');
const selectPosicionImg = document.querySelector('#selectPosicionImg');
const encabezadoGaleria = document.querySelector('#encabezadoGaleria');
const galeriaFotos = document.querySelector('#galeriaFotos');
const botonesPaginacion = document.querySelector('#botonesPaginacion');

//FRAGMENT
const fragment = document.createDocumentFragment();

const urlBase = "https://api.pexels.com/v1";

const arrayFiltro = ["Todos", "Vertical", "Horizontal"];

//Eventos: Change, Click, Submit
formularioBuscar.addEventListener("submit", (ev)=>{

})

document.addEventListener("click", (ev)=>{

})

selectPosicionImg.addEventListener("change", (ev)=>{

})

//Funciones a utilizar

const comprobar = async (url) => {
    
    try{
       let respuesta = await fetch(url, {
        headers:{
            authorization: 'YE5JirgNLsRVP2nvqIAkoWNUeVIaB7NaRlYbWQz9WvLmYBc6247ivBMN'}
        })
        console.log(respuesta)

        if(respuesta.ok){
            respuesta = respuesta.json()
            
            return respuesta
            //console.log("ok", respuesta)
        }else {
            throw ('error')
        }
    }catch(error){
       
    }

}

const pintarBuscar = async() => {
    const buscar = await comprobar(`${urlBase}/search?query=nature&per_page=1`)
    //si buscas en input "nature", este link sera el resultado.
    
    console.log(buscar)
}

const pintarSeccionFotos = () => {

}

const pintarFiltro = () => {
    arrayFiltro.forEach((item)=>{
        let opcion = document.createElement('OPTION')
        opcion.text = item
        opcion.value = item
        
        selectPosicionImg.append(opcion)
    })

}

const pintarEncabezado = () => {

}

const pintarGaleria = () => {

}

const pintarPaginacion = () => {

}

pintarFiltro()