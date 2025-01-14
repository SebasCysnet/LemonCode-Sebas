import { Carta, infoCartas,parejaAComprobar,cartas, vaciarArrayComprobador, vaciarArrayCartasVolteadasDOM ,crearColeccionDeCartasInicial,  indexCartasVolteadasDOM, } from "./model";
import { barajarCartas, sePuedeVoltearLaCarta, asignarValoresDeCarta, cambiarEstadosDeCarta, comprobarSiHaGanado  } from "./motor";

export function iniciarPartida() {
    console.log("UI- Vamos a crear la partida!")
    // crear tablero inicial y barajar cartas ya estará creados
    // activar la seccion de juego
    document.getElementById("app")!.style.display= "grid"
    // desacticar la seccion de "iniciarPartida"
    document.getElementById("seccionIniciarPartida")!.style.display= "none"

    const cartasBarajadas:Carta[] = barajarCartas(crearColeccionDeCartasInicial(infoCartas));
    cartas.push(...cartasBarajadas)
}

function siSonPareja() {
    // cambiar el estado de las cartas a descubierto
    cambiarEstadosDeCarta(parejaAComprobar[0].idFoto)
    const haGanado = comprobarSiHaGanado()
    if (haGanado) {
        mostrarPantallaWin()
    } else {
        sigueJugando()
    }
}

function noSonPareja() {
    console.error("valla, esta vez no has tenido suerte, vaciamos el array")
    resetCartasDOM(indexCartasVolteadasDOM)
}

function hayPareja() {
    if (parejaAComprobar[0].idFoto === parejaAComprobar[1].idFoto) {
        siSonPareja()
    } else {
        noSonPareja()
    }
    vaciarArrayComprobador()
    vaciarArrayCartasVolteadasDOM()
}

export function comprobarParejas(parejaAComprobar:any) {
    if (parejaAComprobar.length === 2) {
        setTimeout(hayPareja, 300)
    } else {
        console.warn("... Quieres comparar esta pareja con ...")
    }
}

export function voltearCarta(indexCartaSeleccionada: number){
    const carta = cartas[indexCartaSeleccionada];
    console.warn(`Ui - has seleccionado la carta de la baraja con id ${carta.idFoto}`)

    if (!carta) {
        console.error("Carta no encontrada en el array.");
        return;
    }

    //4- Verificar si la carta ya está volteada o encontrada
    if (!sePuedeVoltearLaCarta(carta) ) { 
        return; 
    } else {
        //5- Voltear la carta en el DOM
        voltearCartaDOM(indexCartaSeleccionada, carta)
        asignarValoresDeCarta(carta , indexCartaSeleccionada)
    }
}

export function sigueJugando() {
    console.log("recorcholis! has encontrado una pareja!, sigue asi!")
    // pinta en verde el bg de la carta
    indexCartasVolteadasDOM.forEach((index) => {
        const cartaElement = document.querySelectorAll(".carta")[index];
        if (cartaElement instanceof HTMLElement) {
            cartaElement.classList.add("pareja-encontrada");
        }
    });
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
    console.log("HAS GANADO!!!")
    // Ocultar la sección de cartas y botones de juego
    document.getElementById("app")!.style.display = "none";
    document.getElementById("seccionIniciarPartida")!.style.display = "none";

    // Mostrar la pantalla de Win
    const pantallaWin = document.getElementById("pantallaWin");
    if (pantallaWin) {
        pantallaWin.style.display = "block";
    }
}