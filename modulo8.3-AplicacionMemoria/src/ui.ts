import { cartas } from "./model";

export function iniciarPartida() {
    console.log("UI- Vamos a crear la partida!")
    // crear tablero inicial y barajar cartas ya estará creados
    // activar la seccion de juego
    document.getElementById("app")!.style.display= "grid"
    // desacticar la seccion de "iniciarPartida"
    document.getElementById("seccionIniciarPartida")!.style.display= "none"

}

export function voltearCartaDOM(indexCartaSeleccionada: number, cartaDelArray: any) {

    // Voltear la carta en el DOM
    const imgElement = document.querySelectorAll(".imgCarta")[indexCartaSeleccionada] as HTMLImageElement;
    if (imgElement) {
        imgElement.src = cartaDelArray.imagen; // Usar la imagen de la carta
        cartaDelArray.estaVuelta = true; // Marcar la carta como volteada en el array
    } else {
        console.error("No se encontró la imagen correspondiente en el DOM.");
    }
}

export function resetCartasDOM(cartasDOM:any){
    for (let i = 0; i < cartasDOM.length; i++) {
        const element = cartasDOM[i];
        const imgElement = document.querySelectorAll(".imgCarta")[element] as HTMLImageElement;
        const carta = cartas[element];

        imgElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
        carta.estaVuelta = false;

        console.log(`reseteamos la carta ${carta} del mazo `)
    }
}

export function mostrarPantallaWin() {
    // Ocultar la sección de cartas y botones de juego
    document.getElementById("app")!.style.display = "none";
    document.getElementById("seccionIniciarPartida")!.style.display = "none";

    // Mostrar la pantalla de Win
    const pantallaWin = document.getElementById("pantallaWin");
    if (pantallaWin) {
        pantallaWin.style.display = "block";
    }
}