import { Carta } from "./model";

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
// const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {}

//const voltearLaCarta = (tablero: Tablero, indice: number) : void => {}

// Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
//export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {}

// Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
//const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {}

// Aquí asumimos que no son pareja y las volvemos a poner boca abajo
//const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {}

// Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
//export const esPartidaCompleta(tablero: Tablero) : boolean => {}

// Iniciar partida
//export const iniciaPartida = (tablero: Tablero): void => {};