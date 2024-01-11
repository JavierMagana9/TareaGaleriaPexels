
/**
 * Captura de elementos del DOM
 */
const buscar = document.querySelector('#buscar')
const formularioBuscar = document.querySelector('#formularioBuscar');
const seccionFotos = document.querySelector('#seccionFotos');
const selectPosicionImg = document.querySelector('#selectPosicionImg');
const encabezadoGaleria = document.querySelector('#encabezadoGaleria');
const galeriaFotos = document.querySelector('#galeriaFotos');
const botonesPaginacion = document.querySelector('#botonesPaginacion');

// console.log(seccionFotos)
//FRAGMENT
const fragment = document.createDocumentFragment();

const urlBase = "https://api.pexels.com/v1";

const arrayFiltro = ["Todos", "Vertical", "Horizontal"];
const perPage = 12
//Eventos: Change, Click, Submit
formularioBuscar.addEventListener("submit", (ev) => {
    ev.preventDefault()
    const tag = buscar.value
    console.log(tag)
    const url = `search?query=${tag}&per_page=${perPage}`
    pintarGaleria(url)
 
})

document.addEventListener("click", (ev) => {
    if(ev.target.matches('#seccionFotos img')){
        //console.log("estoy en la img")
        const tag = ev.target.id
        //console.log(tag)
        const url = `search?query=${tag}&per_page=${perPage}`
        pintarGaleria(url)
    }

})

selectPosicionImg.addEventListener("change", (ev) => {

})

//Funciones a utilizar

const comprobar = async (url) => {

    try {
        let respuesta = await fetch(`${urlBase}/${url}`, {
            headers: {
                authorization: 'YE5JirgNLsRVP2nvqIAkoWNUeVIaB7NaRlYbWQz9WvLmYBc6247ivBMN'
            }
        })
        // console.log(respuesta)

        if (respuesta.ok) {
            respuesta = respuesta.json()

            return {
                error:false,
                respuesta
            }
            //console.log("ok", respuesta)
        } else {
            throw ('Error al obtener los datos')
        }
    } catch (error) {
        return {
            error:true,
            msg:error
        }
    }

}

const pintarBuscar = async () => {

}

const pintarCategorias = () => {

    const arrayIds = [{
        titulo: 'tigre',
        tag: 'tiger',
        id: "792381"
    }, {
        titulo: 'flores',
        tag: 'flowers',
        id: "56866"
    },
    {
        titulo: 'coche',
        tag: 'car',
        id: "210019"
    }];

    arrayIds.forEach(async ({ titulo: title, tag, id }) => {

        const respuesta = await comprobar(`photos/${id}`)
         const foto=await respuesta.respuesta;

        const caja = document.createElement('ARTICLE');
        const cajaFoto = document.createElement('DIV');
        const imagen = document.createElement('IMG');
        imagen.src = foto.src.medium;
        imagen.alt = foto.alt;
        imagen.id = tag;
        const titulo = document.createElement('H3');
        titulo.textContent = title;
        cajaFoto.append(imagen);
        caja.append(cajaFoto, titulo);
        seccionFotos.append(caja)
    })
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

const pintarGaleria = async (url) => {
    galeriaFotos.innerHTML=''
    console.log(url)
    const respuesta = await comprobar(url)

    if (!respuesta.error){
        const foto=await respuesta.respuesta
        
        console.log(foto)
       const {photos} = foto

       photos.forEach((item)=>{
            //console.log(item)
            const caja = document.createElement('ARTICLE')
            const cajaFoto = document.createElement('DIV')
            const imagen = document.createElement('IMG')
            imagen.src = item.src.medium
            imagen.alt = item.alt
            const titulo = document.createElement('P')
            titulo.textContent = item.alt
            const autor = document.createElement('P')
            autor.textContent = item.photographer

            cajaFoto.append(imagen)
            caja.append(cajaFoto, titulo, autor)
            fragment.append(caja)
       })
    galeriaFotos.append(fragment)    
    }else{
        const aviso = document.createElement('P')
        aviso.textContent = 'Lo sentimos ha ocurrido un error'

        galeriaFotos.append(aviso)
    }
   
}

const pintarPaginacion = (url) => {



}


pintarCategorias()
pintarFiltro()


