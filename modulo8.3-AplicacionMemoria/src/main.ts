import "./style.css";

import { cartas, parejaAComprobar } from "./model";
import { iniciarPartida, voltearCarta, comprobarParejas } from "./ui";

//4- Pasamos por consola las cartas ya barajadas
console.log(cartas)

const botonDOMIniciarPartida = document.querySelector("#iniciarPartida")
const cartasDOM = document.querySelectorAll(".carta")
const botonDOMReiniciarPartida= document.querySelector("#reiniciarPartida")

// añade el indice a cada carta del DOM de forma ordenada
cartasDOM.forEach((carta, index) => {
    carta.setAttribute("data-index", index.toString())
})

// Iniciar Partida
if (botonDOMIniciarPartida instanceof HTMLButtonElement) {
    botonDOMIniciarPartida.addEventListener("click", () => {
        iniciarPartida ();
    })
}
// reiniciar partida
if (botonDOMReiniciarPartida instanceof HTMLButtonElement) {
    botonDOMReiniciarPartida.addEventListener("click", () => {
        location.reload();
    })
}

// voltear carta
// Con forEach, iteramos sobre cada carta del NodeList y le agregamos un listener de "clic"
//1- capturamos que elemento ha echo click y se lo pasamos a UI para gestionarlo
cartasDOM.forEach((carta) => {carta.addEventListener("click", () => {
    const index = parseInt(carta.getAttribute("data-index") || "0", 10)
    console.log(`Main - volteamos la carta ${index + 1} del DOM`)
    voltearCarta(index) // encontramos la carta seleccionada, verifica la carta si ya esta volteada 
    comprobarParejas(parejaAComprobar)
})
})

