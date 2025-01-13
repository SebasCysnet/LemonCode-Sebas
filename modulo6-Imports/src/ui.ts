import { store } from "./model";
import { generadorNumeroAleatorio, actualizarPtosUsuario, actualizarCarta } from "./motor";

const botonDOMVolver = document.getElementById("volver")
const botonDameCarta = document.getElementById("dameCarta")
const botonDOMSiguienteCarta = document.getElementById("siguienteCarta")

const botonRetirarse = document.getElementById("retirarse")
const imgCarta = document.getElementById("imgCarta")
const puntuacionUsuario = document.getElementById("puntuacionUsuario")
const mensajito = document.getElementById("mensajito")
const puntuacionDOMCarta = document.getElementById("puntuacionDOMCarta")

// Funcio para cambiar el mensajito
export function cambioMensajito(texto:string, modoTexto:number) {
    if (mensajito ) {
        mensajito.textContent = texto
        mensajito.style.fontSize = "30px"

        if (modoTexto == 0) {
            mensajito.style.color = "red"
        } else if (modoTexto == 1) {
            mensajito.style.color = "green"
        } else if (modoTexto == 2){
            mensajito.style.color = "black"
        }
    }
}

// Comprobador si ha pasado de 7,5 o ha clavado el 7,5
export function comprobador() {
    if (store.puntuacionActual > 7.5 && botonRetirarse && botonDOMVolver && botonDameCarta) {
        console.error(`te has pasado!!`)
        // activamos y desactivamos botones
        botonRetirarse.style.display = "none";
        botonDameCarta.style.display = "none";
        botonDOMVolver.style.display = "block";
        // activar mensaje "game Over"
        cambioMensajito("GAME OVER, te has pasado amigo", 0)
    } 
    else if (store.puntuacionActual == 7.5 && botonRetirarse && botonDOMVolver && botonDameCarta) {
        console.error(`LO HAS CLAVADO!!`)
        // activamos y desactivamos botones
        botonRetirarse.style.display = "none";
        botonDameCarta.style.display = "none";
        botonDOMVolver.style.display = "block";
        // activar mensaje "game Over"
        cambioMensajito("¡ Lo has clavado! ¡Enhorabuena!", 1)
    }
}

// Actualiza DOM de puntos totales del usuario
export function actualizaDOMPuntosTotal() {
    if (puntuacionUsuario !== undefined && puntuacionUsuario !== null) {
        puntuacionUsuario.textContent = store.puntuacionActual.toString()
    } else {
        console.log("algo ha pasado al sumar puntos al usuario")
    }
}

//actualizar Imagen de la carta
export function mostrarCarta(cartaSeleccionada:number) {
    if (imgCarta instanceof HTMLImageElement) {
        switch (cartaSeleccionada) {
            case 1:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
                break;
            case 2:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
                break;
            case 3:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
                break;
            case 4:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
                break;
            case 5:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
                break;
            case 6:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
                break;
            case 7:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
                break;
            case 10:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
                break;
            case 11:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
                break;
            case 12:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
                break;

            default:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
                break;
        }
 
    }
}

// actualiza el DOM de lo que vale la carta
export function actualizarDOMCarta() {
    if (puntuacionDOMCarta) {
        puntuacionDOMCarta.textContent = store.puntuacionNuevaCarta.toString()
    } else{
        console.log("algo ha pasado al actualizar los datos de la carta")
    }
}

export function actualizaBotonInicio() {
    if (botonDOMVolver && puntuacionUsuario && botonDameCarta && botonDOMSiguienteCarta && botonRetirarse) {
        // resetear puntos actuales
        store.puntuacionActual = 0
        puntuacionUsuario.textContent = store.puntuacionActual.toString();
        botonDameCarta.style.display = "block";
        botonDOMSiguienteCarta.style.display = "none"
        botonDOMVolver.style.display = "none"
        botonRetirarse.style.display = "block"
    } 
}

export function actualizaDOMMensajito() {
    if (botonRetirarse && botonDameCarta && botonDOMVolver && botonDOMSiguienteCarta) {
        botonRetirarse.style.display = "none";
        botonDameCarta.style.display = "none";
        botonDOMSiguienteCarta.style.display = "block"
        botonDOMVolver.style.display = "block";
    }
}


// funcion dame Carta
export function dameCarta() {
    // elige un numero del 1 al 12 y lo capturamos en una variable
    store.carta = generadorNumeroAleatorio(10)
    console.log(`ha salido la carta ${store.carta}`)

    // ejecutamos funcion de actualizar ptos del usuario si esta en pleno juego
    actualizarPtosUsuario(store.carta)

    // ejecutamos funcion de actualizar la imagen y los punos
    actualizarCarta(store.carta)
}

// funcion siguiente Carta
export function siguienteCarta() {
    store.carta = generadorNumeroAleatorio(10)
    console.log(`ha salido la carta ${store.carta}`)

    // ejecutamos funcion de actualizar la imagen y los punos
    actualizarCarta(store.carta)
}

// funcion volver
export function volver() {
    actualizaBotonInicio()

    // resetear carta
    actualizarCarta(0)
    mostrarCarta(0)

    // resetear mensaje
    cambioMensajito("no te pases de 7,5", 2)
}

// funcion retirarse
export function retirarse() {
    if (store.puntuacionActual <= 4) {
        cambioMensajito("Has sido muy conservador", 1 )
    } else if (store.puntuacionActual > 4 && store.puntuacionActual <= 5) {
        cambioMensajito("Te ha entrado el canguelo eh?", 1)
    } else if (store.puntuacionActual > 5 && store.puntuacionActual <= 7) {
        cambioMensajito("Casi casi...", 1)
    } else {
        cambioMensajito("No deberias ver esto", 3)
    }

    actualizaDOMMensajito()
}