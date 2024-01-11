
/**
 * Captura de elementos del DOM
 */
const formularioBuscar = document.querySelector('#formularioBuscar')
const seccionFotos = document.querySelector('#seccionFotos')
const selectPosicionImg = document.querySelector('#selectPosicionImg')
const encabezadoGaleria = document.querySelector('#encabezadoGaleria')
const galeriaFotos = document.querySelector('#galeriaFotos')
const botonesPaginacion = document.querySelector('#botonesPaginacion')

//FRAGMENT
const fragment = document.createDocumentFragment()

const urlBase = "https://api.pexels.com/v1"

//Eventos: Change, Click, Submit
formularioBuscar.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    pintarGaleria('esta e la url')
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
        // console.log(respuesta)

        if(respuesta.ok){
            respuesta = respuesta.json()
            
            return respuesta
            //console.log("ok", respuesta)
        }else {
            throw ('error')
        }
    }catch(error){
       return error
    }

}

const pintarCategorías = () => {

}


const pintarGaleria = async(url) => {
    console.log(url)
    const buscar = await comprobar(`${urlBase}/search?query=nature&per_page=1`)
    //si buscas en input "nature", este link sera el resultado.
    const {photos}=buscar
    console.log(photos)

    photos.forEach(element => {
        console.log(element.alt)
    });
}



