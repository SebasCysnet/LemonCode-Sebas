import {  } from "./motor";

const imgCarta = document.querySelector("img");

export function iniciarPartida() {
    console.log("UI- Vamos a crear la partida!")
    // crear tablero inicial y barajar cartas ya estará creados

    // activar la seccion de juego
    document.getElementById("app")!.style.display= "grid"
    // desacticar la seccion de "iniciarPartida"
    document.getElementById("seccionIniciarPartida")!.style.display= "none"
}

export function voltearCarta() {
    console.log(`vamos a darle la vuelta a la carta`)
        if (imgCarta) {
            imgCarta.setAttribute("src", "assets/1.png"); // Cambiar el src de la imagen
        }
}