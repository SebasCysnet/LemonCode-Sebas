import {Carta, cartas, parejaAComprobar, indexCartasVolteadasDOM } from "./model";

function NumRandom(indice:number):number {
    return Math.floor(Math.random() * (indice + 1));
}

export function barajarCartas(cartas : Carta[]): Carta[] {
    const cartasBarajadas = [...cartas]
    for (let i = cartasBarajadas.length -1; i > 0; i--) {
        const indiceAleatorio = NumRandom(i);

        [cartasBarajadas[i], cartasBarajadas[indiceAleatorio]] =  [cartasBarajadas[indiceAleatorio], cartasBarajadas[i]]
    }
    return cartasBarajadas
}

export function asignarValoresDeCarta(carta: any, indexCartaSeleccionada: number) {
    //6- Meter carta en caja para luego comprobar pareja, el objeto ENTERO
    parejaAComprobar.push(carta)
    //7- Guardo la posicion en Index de donde las cartas que voya  comprobar
    indexCartasVolteadasDOM.push(indexCartaSeleccionada)
}

// Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
export function sePuedeVoltearLaCarta(carta: any ): boolean {
    if (carta.estaVuelta || carta.encontrada) {
        console.error("Motor - Esta carta ya está volteada o encontrada")
        return false
    } else {
        return true
    }
}

// funcion que cambia el estado de la carta una vez encontrada la pareja
export function cambiarEstadosDeCarta(idCarta:number) {
    for (let i = 0; i < cartas.length; i++) {
        const element = cartas[i];
        if (element.idFoto === idCarta) {
            element.encontrada = true
        }
    }
}

// returna "false" si todas las cartas se han descubierto
// returna "true" si aun falta alguna carta por descubrir
function revisarEstadosDeCartas(): boolean {
    return cartas.some(carta => carta.encontrada === false);
}

// Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
// parejaEncontrada
export function comprobarSiHaGanado(): boolean {
    if (!revisarEstadosDeCartas()) {
        return true    
    } else {
        return false
    }
}

