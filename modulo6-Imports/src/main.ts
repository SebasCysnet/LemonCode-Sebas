import "./style.css";
import { dameCarta, siguienteCarta, volver, retirarse } from "./motor";

// no entiendo a que se refiere con "instanceof"
const botonDOMVolver = document.getElementById("volver")
const botonDameCarta = document.getElementById("dameCarta")
const botonDOMRetirarse = document.getElementById("retirarse")
const botonDOMSiguienteCarta = document.getElementById("siguienteCarta")

// Dame carta
if (botonDameCarta instanceof HTMLButtonElement ) {
    botonDameCarta.addEventListener("click", () => { dameCarta() });
}

// Siguiente carta
if (botonDOMSiguienteCarta instanceof HTMLButtonElement) {
    botonDOMSiguienteCarta.addEventListener("click", () => { siguienteCarta() })
}

// Boton Volver
if (botonDOMVolver instanceof HTMLButtonElement) {
    botonDOMVolver.addEventListener("click", () => { volver() })
}

// boton Retirarse
if (botonDOMRetirarse instanceof HTMLButtonElement) {
    botonDOMRetirarse.addEventListener("click", () => { retirarse() })
}
