import { store } from "./model";

// Actualizacion de PTOS del usuario
function actualizarPtosUsuario(cartaSeleccionada:number) {
    store.puntuacionActual += cartaSeleccionada >= 10 ? 0.5 : cartaSeleccionada;
    console.warn(`actualmente tienes ${store.puntuacionActual} puntos`);
}

// Actualizacion de nueva carta
function actualizarCarta(cartaSeleccionada:number) {
    store.puntuacionNuevaCarta = cartaSeleccionada >= 10 ? 0.5 : cartaSeleccionada;
}

// saca nuemro Aleatorio
export function numeroAleatorio(NumMax:number) :number {
    return Math.floor(Math.random() * NumMax) +1
}
// Generador de numero del 1 al 12
export function comprobadorCarta(NumeroCarta:number) {
    return NumeroCarta > 7 ? NumeroCarta + 2 : NumeroCarta;
}

export function comprobarisWin(NumeroActual:number) :number {
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
    let nuevoNumero = numeroAleatorio(10)
    store.carta = comprobadorCarta(nuevoNumero)
    console.log(`ha salido la carta ${store.carta}`)

    // ejecutamos funcion de actualizar ptos del usuario si esta en pleno juego
    actualizarPtosUsuario(store.carta)

    // ejecutamos funcion de actualizar la imagen y los punos
    actualizarCarta(store.carta)

    return comprobarisWin(store.puntuacionActual)
}

// funcion siguiente Carta
export function siguienteCarta() {
    let nuevoNumero = numeroAleatorio(10)
    store.carta = comprobadorCarta(nuevoNumero)
    console.log(`ha salido la carta ${store.carta}`)

    // ejecutamos funcion de actualizar la imagen y los punos
    actualizarCarta(store.carta)
}

// funcion volver
export function volver() {
    // resetear carta
    actualizarCarta(0)
}
