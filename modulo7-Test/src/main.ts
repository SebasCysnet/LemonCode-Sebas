import "./style.css";
import { store } from "./model";
import { dameCarta, siguienteCarta, volver,  } from "./motor";
import { retirarse, cambioMensajito, comprobador, actualizaDOMPuntosTotal, mostrarCarta, actualizarDOMCarta, actualizaBotonInicio } from "./ui";

// no entiendo a que se refiere con "instanceof"
const botonDOMVolver = document.getElementById("volver")
const botonDameCarta = document.getElementById("dameCarta")
const botonDOMRetirarse = document.getElementById("retirarse")
const botonDOMSiguienteCarta = document.getElementById("siguienteCarta")

// Dame carta
if (botonDameCarta instanceof HTMLButtonElement ) {
    botonDameCarta.addEventListener("click", () => { 
        // 1 = ha ganado __ 2 = se ha pasado de 7.5 __ 0 == sige
        const isWin = dameCarta() 

        // Actualizar en DOM el numero de puntos actuales del usuario
        actualizaDOMPuntosTotal()

        // comprobar si ha pasado de 7,5()
        comprobador(isWin)

        //Actualizacion de DOM
        actualizarDOMCarta()

        // actualiza el DOM de la img de la carta
        mostrarCarta(store.carta)
    });
}

// Siguiente carta
if (botonDOMSiguienteCarta instanceof HTMLButtonElement) {
    botonDOMSiguienteCarta.addEventListener("click", () => { 
        siguienteCarta() 
        
        //Actualizacion de DOM
        actualizarDOMCarta()

        // actualiza el DOM de la img de la carta
        mostrarCarta(store.carta)
    })
}

// Boton Volver
if (botonDOMVolver instanceof HTMLButtonElement) {
    botonDOMVolver.addEventListener("click", () => { 
        volver() 

        actualizaBotonInicio()

        mostrarCarta(0)
        // resetear mensaje
        cambioMensajito("no te pases de 7,5", 2)
    })
}

// boton Retirarse
if (botonDOMRetirarse instanceof HTMLButtonElement) {
    botonDOMRetirarse.addEventListener("click", () => { retirarse() })
}
