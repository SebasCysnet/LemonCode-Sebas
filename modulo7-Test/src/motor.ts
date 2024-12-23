import { store } from "./model";

// Actualizacion de PTOS del usuario
function actualizarPtosUsuario(cartaSeleccionada:number) {
    // actualizamos la variable de los puntos actuales del usuario
    if (cartaSeleccionada >= 10 ) {
        store.puntuacionActual += 0.5
    } else {
        store.puntuacionActual += cartaSeleccionada
    }
    
    console.warn(`actualmente tienes ${store.puntuacionActual} puntos`)
}

// Actualizacion de nueva carta
function actualizarCarta(cartaSeleccionada:number) {
    if (cartaSeleccionada >= 10 ) {
        store.puntuacionNuevaCarta = 0.5
    } else {
        store.puntuacionNuevaCarta = cartaSeleccionada
    }
}

// Generador de numero del 1 al 12
export function generadorNumeroAleatorio(NumMax:number) {
    let numeroAzar = Math.floor(Math.random() * NumMax) +1
    // si el numero es mayor de 7 suma 2            // sota= 10 -- Caballo= 11 -- rey= 12
    if (numeroAzar > 7) {
        return numeroAzar + 2
    } else {
        return numeroAzar
    }
}

export function comprobarisWin(NumeroActual:number) {
    if (NumeroActual == 7.5) {
        return 1
    } if (NumeroActual > 7.5) {
        return 2
    }
    return 0
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

    return comprobarisWin(store.puntuacionActual)
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
    // resetear carta
    actualizarCarta(0)
}
