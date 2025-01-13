import { store } from "./model";
import {comprobador, actualizaDOMPuntosTotal, mostrarCarta, actualizarDOMCarta} from "./ui";

// actualizamos variable de puntos totales del usuario
function actualizarValorPuntosTotal(cartaSeleccionada:number) {
    if (cartaSeleccionada >= 10 ) {
        store.puntuacionActual += 0.5
    } else {
        store.puntuacionActual += cartaSeleccionada
    }
}

// Actualizacion de PTOS del usuario
export function actualizarPtosUsuario(cartaSeleccionada:number) {
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
export function actualizarCarta(cartaSeleccionada:number) {
    actualizarValoresCarta(cartaSeleccionada)

    //Actualizacion de DOM
    actualizarDOMCarta()
    
    // actualiza el DOM de la img de la carta
    mostrarCarta(cartaSeleccionada)
}

// Generador de numero del 1 al 12
// retorna un numero del 1 al 12 (sin incluir el 7 ni el 8 ni el 9)
export function generadorNumeroAleatorio(NumMax:number) {
    let numeroAzar = Math.floor(Math.random() * NumMax) +1
    // si el numero es mayor de 7 suma 2            // sota= 10 -- Caballo= 11 -- rey= 12
    if (numeroAzar > 7) {
        return numeroAzar + 2
    } else {
        return numeroAzar
    }
}
