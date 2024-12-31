import { Carta, cartas, parejaAComprobar, vaciarArrayComprobador, indexCartasVolteadasDOM, vaciarArrayCartasVolteadasDOM } from "./model";
import { voltearCartaDOM, resetCartasDOM, mostrarPantallaWin } from "./ui";

//2- Implementa el algoritmo de Fisher-Yates para mezclar las cartas.
//      Se asegura de que las cartas estén en un orden completamente aleatorio.
//! método para barajar cartas
export const barajarCartas = (cartas : Carta[]): Carta[] => {
    // copiamos el array original (con als cartas duplicadas) y lo asignamos a una nueva variable
    const cartasBarajadas = [...cartas]
    for (let i = cartasBarajadas.length -1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        // intercambiamos los elementos de forma random
        [cartasBarajadas[i], cartasBarajadas[indiceAleatorio]] =  [cartasBarajadas[indiceAleatorio], cartasBarajadas[i]]
    }
    return cartasBarajadas
}

// Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
function sePuedeVoltearLaCarta(carta: any ): boolean {
    if (carta.estaVuelta || carta.encontrada) {
        console.error("Motor - Esta carta ya está volteada o encontrada")
        return false
    } else {
        return true
    }
}

//2- capturamos el index del elemento clicado
export function voltearCarta(indexCartaSeleccionada: number) {

    //3- busca dentro de la baraja la posicion index de donde ha clicado y busca dentro del array de cartas ya barajadas la posicion index que haya clicado
    const carta = cartas[indexCartaSeleccionada];
    console.warn(`Motor - has seleccionado la carta de la baraja con id ${carta.idFoto}`)
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

         //6- Meter carta en caja para luego comprobar pareja, el objeto ENTERO
        parejaAComprobar.push(carta)

        //7- Guardo la posicion en Index de donde las cartas que voya  comprobar
        indexCartasVolteadasDOM.push(indexCartaSeleccionada)
    }
}

// funcion que cambia el estado de la carta una vez encontrada la pareja
function cambiarEstadosDeCarta(idCarta:number) {
    for (let i = 0; i < cartas.length; i++) {
        const element = cartas[i];
        if (element.idFoto == idCarta) {
            element.encontrada = true
        }
    }
}

// Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
//export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {}
export function sonPareja() {
    if (parejaAComprobar[0].idFoto == parejaAComprobar[1].idFoto) {
        // cambiar el estado de las cartas a descubierto
        cambiarEstadosDeCarta(parejaAComprobar[0].idFoto)
        parejaEncontrada()
    } else {
        console.error("valla, esta vez no has tenido suerte, vaciamos el array")
        resetCartasDOM(indexCartasVolteadasDOM)
    }
    vaciarArrayComprobador()
    vaciarArrayCartasVolteadasDOM()
}

// returna "false" si todas las cartas se han descubierto
// returna "true" si aun falta alguna carta por descubrir
function revisarEstadosDeCartas(): boolean {
    return cartas.some(carta => carta.encontrada === false);
}

// Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
//const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {}
function parejaEncontrada() {
    if (!revisarEstadosDeCartas()) {
        console.log("HAS GANADO!!!")
        mostrarPantallaWin();
    } else {
        console.log("recorcholis! has encontrado una pareja!, sigue asi!")
        // pinta en verde el bg de la carta
        indexCartasVolteadasDOM.forEach((index) => {
            const cartaElement = document.querySelectorAll(".carta")[index] as HTMLElement;
            if (cartaElement) {
                cartaElement.classList.add("pareja-encontrada");
            }
        });
    }
}
