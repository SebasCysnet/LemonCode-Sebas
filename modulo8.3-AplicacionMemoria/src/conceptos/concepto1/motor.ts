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