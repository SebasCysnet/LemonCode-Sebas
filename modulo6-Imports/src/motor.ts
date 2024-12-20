import { store } from "./model";
import { cambioMensajito, comprobador, actualizaDOMPuntosTotal, mostrarCarta, actualizarDOMCarta, actualizaBotonInicio, actualizaDOMMensajito } from "./ui";

// actualizamos variable de puntos totales del usuario
function actualizarValorPuntosTotal(cartaSeleccionada:number) {
    if (cartaSeleccionada >= 10 ) {
        store.puntuacionActual += 0.5
    } else {
        store.puntuacionActual += cartaSeleccionada
    }
}

// Actualizacion de PTOS del usuario
function actualizarPtosUsuario(cartaSeleccionada:number) {
    // actualizamos la variable de los puntos actuales del usuario
    actualizarValorPuntosTotal(cartaSeleccionada)
    // Actualizar en DOM el numero de puntos actuales del usuario
    actualizaDOMPuntosTotal()
    
    console.warn(`actualmente tienes ${store.puntuacionActual} puntos`)
    // comprobar si ha pasado de 7,5()
    comprobador()
}

// actualiza el valorde ptos de la carta sacada
function actualizarValoresCarta(cartaSeleccionada:number) {
    if (cartaSeleccionada >= 10 ) {
        store.puntuacionNuevaCarta = 0.5
    } else {
        store.puntuacionNuevaCarta = cartaSeleccionada
    }
}

// Actualizacion de nueva carta
function actualizarCarta(cartaSeleccionada:number) {
    actualizarValoresCarta(cartaSeleccionada)

    //Actualizacion de DOM
    actualizarDOMCarta()
    
    // actualiza el DOM de la img de la carta
    mostrarCarta(cartaSeleccionada)
}

// Generador de numero del 1 al 12
function generadorNumeroAleatorio(NumMax:number) {
    let numeroAzar = Math.floor(Math.random() * NumMax) +1
    // si el numero es mayor de 7 suma 2            // sota= 10 -- Caballo= 11 -- rey= 12
    if (numeroAzar > 7) {
        return numeroAzar + 2
    } else {
        return numeroAzar
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