import "./style.css";

import { cartas } from "./model";
import { iniciarPartida, voltearCarta } from "./ui";

//4- Pasamos por consola las cartas ya barajadas
console.log(cartas)

const botonDOMIniciarPartida = document.querySelector("#iniciarPartida")
const botonDOMVolearCarta = document.querySelector(".carta")

if (botonDOMIniciarPartida instanceof HTMLButtonElement) {
    botonDOMIniciarPartida.addEventListener("click", () => {iniciarPartida ()})
}

if (botonDOMVolearCarta) {
    botonDOMVolearCarta.addEventListener("click", () => { voltearCarta() })
}

