import { barajarCartas } from "./motor";

export interface Carta {
    idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
    // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
    imagen: string; // por comodidad repetimos la url de la imagen
    estaVuelta: boolean;
    encontrada: boolean;
}

interface InfoCarta {
idFoto: number;
imagen: string;
}

// Aquí ponemos seis cartas siguiendo la interfaz de InfoCarta
const infoCartas: InfoCarta[] = [
    {idFoto: 1, imagen: "assets/1.png"},
    {idFoto: 2, imagen: "assets/2.png"},
    {idFoto: 3, imagen: "assets/3.png"},
    {idFoto: 4, imagen: "assets/4.png"},
    {idFoto: 5, imagen: "assets/5.png"},
    {idFoto: 6, imagen: "assets/6.png"}
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});
// 1- Duplica las cartas del array infoCartas, generando dos copias de cada carta.
//      Usa flatMap para aplanar el array de arrays en un único array.
const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    const cartas: Carta[] = infoCartas.flatMap(carta => 
        [
            crearCartaInicial(carta.idFoto, carta.imagen),
            crearCartaInicial(carta.idFoto, carta.imagen) 
        ]
    )
    return cartas
};

//3- Se añade a esta nueva variable las cartas ya barajadas
export let cartas: Carta[] = barajarCartas(crearColeccionDeCartasInicial(infoCartas));

/*
Aquí definimos el tipo de estado de la partida, la idea es que cuando empiece la partida todas las cartas estén boca abajo y si se hacen click sobre ellas no se volteen.
EstadoPartida = "PartidaNoIniciada", una vez que se pulse "Iniciar partida" el estado de la partida cambiaría a "CeroCartasLevantadas" y así sucesivamente.
*/

type EstadoPartida = | "PartidaNoIniciada" | "CeroCartasLevantadas" | "UnaCartaLevantada" | "DosCartasLevantadas" | "PartidaCompleta";

export interface Tablero {
    cartas: Carta[];
    estadoPartida: EstadoPartida;
    indiceCartaVolteadaA?: number;
    indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
    cartas: cartas,
    estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();