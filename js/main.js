
/**
 * Captura de elementos del DOM
 */

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

//Eventos: Change, Click, Submit
formularioBuscar.addEventListener("submit", (ev) => {


})

document.addEventListener("click", (ev) => {

})

selectPosicionImg.addEventListener("change", (ev) => {

})

//Funciones a utilizar

const comprobar = async (url) => {

    try {
        let respuesta = await fetch(url, {
            headers: {
                authorization: 'YE5JirgNLsRVP2nvqIAkoWNUeVIaB7NaRlYbWQz9WvLmYBc6247ivBMN'
            }
        })
        // console.log(respuesta)

        if (respuesta.ok) {
            respuesta = respuesta.json()

            return respuesta
            //console.log("ok", respuesta)
        } else {
            throw ('error')
        }
    } catch (error) {

    }

}

const pintarBuscar = async () => {

}

const pintarCategorias = () => {

    const arrayIds = [{
        tag: 'tigre',
        id: "792381"
    }, {
        tag: 'flores',
        id: "56866"
    },
    {
        tag: 'coche',
        id: "210019"
    }];

    arrayIds.forEach(async ({ tag, id }) => {

        const foto = await comprobar(`${urlBase}/photos/${id}`)
        // console.log(foto)

        const caja = document.createElement('ARTICLE');
        const cajaFoto = document.createElement('DIV');
        const imagen = document.createElement('IMG');
        imagen.src = foto.src.medium;
        imagen.alt = foto.alt;
        imagen.id = tag;
        const titulo = document.createElement('H3');
        titulo.textContent = tag;
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

const pintarGaleria = () => {

}

const pintarPaginacion = () => {

}


pintarCategorias()
pintarFiltro()


