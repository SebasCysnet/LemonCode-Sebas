import "./style.css";

let puntuacionActual = 0;
let carta = 0;
let puntuacionNuevaCarta = 0;

const botonRetirarse = document.getElementById("retirarse")
const botonDOMVolver = document.getElementById("volver")
const botonDameCarta = document.getElementById("dameCarta")
const imgCarta = document.getElementById("imgCarta") as HTMLImageElement
const botonDOMRetirarse = document.getElementById("retirarse")
const botonDOMSiguienteCarta = document.getElementById("siguienteCarta")
const puntuacionUsuario = document.getElementById("puntuacionUsuario")
const mensajito = document.getElementById("mensajito")
const puntuacionDOMCarta = document.getElementById("puntuacionDOMCarta")

// funciones de Ayuda
// Generador de numero del 1 al 12
// retorna un numero del 1 al 12 (sin incluir el 7 ni el 8 ni el 9)
export function generadorNumeroAleatorio(NumMax:number) {
    let numeroAzar = Math.floor(Math.random() * NumMax) +1
    // si el numero es mayor de 7 suma 2            // sota= 10 -- Caballo= 11 -- rey= 12
    if (numeroAzar > 7) {
        return numeroAzar + 2
    } else {
        return numeroAzar
    }
}
function funcionPuntuacionNuevaCarta(cartaSeleccionada:number):number {
    return cartaSeleccionada >= 10 ? 0.5 : cartaSeleccionada;
}
// Funcio para cambiar el mensajito
function cambioMensajito(texto:string, modoTexto:number) {
    if (mensajito ) {
        mensajito.textContent = texto
        mensajito.style.fontSize = "30px"

        if (modoTexto == 0) {
            mensajito.style.color = "red"
        } else if (modoTexto == 1) {
            mensajito.style.color = "green"
        } else if (modoTexto == 2){
            mensajito.style.color = "black"
        }
    }
}
// Comprobador si ha pasado de 7,5
function comprobador() {
    if ( botonRetirarse instanceof HTMLButtonElement && botonDameCarta instanceof HTMLButtonElement && botonDOMVolver instanceof HTMLButtonElement) {
        if (puntuacionActual > 7.5) {
            console.error(`te has pasado!!`)
            // activamos y desactivamos botones
            botonRetirarse.style.display = "none";
            botonDameCarta.style.display = "none";
            botonDOMVolver.style.display = "block";
            // activar mensaje "game Over"
            cambioMensajito("GAME OVER, te has pasado amigo", 0)
        } else if (puntuacionActual == 7.5){
            console.error(`LO HAS CLAVADO!!`)
            // activamos y desactivamos botones
            botonRetirarse.style.display = "none";
            botonDameCarta.style.display = "none";
            botonDOMVolver.style.display = "block";
            // activar mensaje "game Over"
            cambioMensajito("¡ Lo has clavado! ¡Enhorabuena!", 1)
        }
    } 
}
function actualizarNumeroPuntosDOM() {
    if (puntuacionUsuario ) {
        puntuacionUsuario.textContent = puntuacionActual.toString()
    } else {
        console.log("algo ha pasado al actualizar los datos de los puntos")
    }
}
function sumarPuntos(ptosASumar:number):number {
    return puntuacionActual += ptosASumar
}
// Actualizacion de PTOS del usuario
function actualizarPtosUsuario(cartaSeleccionada:number) {
    const puntuacionDeLaNuevaCarta = funcionPuntuacionNuevaCarta(cartaSeleccionada)
    console.log(`ha consegiuido ${puntuacionDeLaNuevaCarta} puntos`)

    // sumar puntos
    sumarPuntos(puntuacionDeLaNuevaCarta)
    
    // Actualizar en DOM el numero
    actualizarNumeroPuntosDOM()

    console.warn(`actualmente tienes ${puntuacionActual} puntos`)
    // comprobar si ha pasado de 7,5()
    comprobador()
}
//actualizar Imagen de la carta
function mostrarCarta(cartaSeleccionada:number) {
    if (imgCarta) {
        switch (cartaSeleccionada) {
            case 1:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"
                break;
            case 2:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"
                break;
            case 3:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"
                break;
            case 4:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"
                break;
            case 5:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"
                break;
            case 6:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"
                break;
            case 7:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"
                break;
            case 10:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"
                break;
            case 11:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"
                break;
            case 12:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
                break;

            default:
                imgCarta.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
                break;
        }
 
    }
}
// actualizacion DOM de la carta
function actualizarPuntosCartaDOM() {
    //Actualizacion de DOM
    if (puntuacionDOMCarta) {
        puntuacionDOMCarta.textContent = puntuacionNuevaCarta.toString()
    } else{
        console.log("algo ha pasado al actualizar los datos de la carta")
    }
}
// Actualizacion de nueva carta
function actualizarCarta(cartaSeleccionada:number) {
    funcionPuntuacionNuevaCarta(cartaSeleccionada);
    
    actualizarPuntosCartaDOM()

    mostrarCarta(cartaSeleccionada)
}

// Dame carta
if (botonDameCarta instanceof HTMLButtonElement ) {
    botonDameCarta.addEventListener("click", () => { dameCarta() });
}
function dameCarta() {
    // elige un numero del 1 al 10 y lo capturamos en una variable
    carta = generadorNumeroAleatorio(10)
    console.log(`ha salido la carta ${carta}`)

    // ejecutamos funcion de actualizar ptos del usuario si esta en pleno juego
    actualizarPtosUsuario(carta)

    // ejecutamos funcion de actualizar la imagen y los punos
    actualizarCarta(carta)
}
    
// Siguiente carta (que habria pasado?)
if (botonDOMSiguienteCarta) {
    botonDOMSiguienteCarta.addEventListener("click", () => { siguienteCarta() });
}
function siguienteCarta() {
    // elige un numero del 1 al 10 y lo capturamos en una variable
    carta = generadorNumeroAleatorio(10)

    console.warn(`ha salido la carta ${carta}`)

    // ejecutamos funcion de actualizar la imagen y los punos
    actualizarCarta(carta)
}


// Boton Volver
if (botonDOMVolver) {
    botonDOMVolver.addEventListener("click", () => { volver() });
}
function resetearFront():void {
    if (puntuacionUsuario && botonDameCarta instanceof HTMLButtonElement && botonDOMSiguienteCarta instanceof HTMLButtonElement && botonDOMVolver instanceof HTMLButtonElement && botonRetirarse instanceof HTMLButtonElement) {
        // resetear puntos actuales
        puntuacionActual = 0
        puntuacionUsuario.textContent = puntuacionActual.toString();
        botonDameCarta.style.display = "block";
        botonDOMSiguienteCarta.style.display = "none"
        botonDOMVolver.style.display = "none"
        botonRetirarse.style.display = "block"
    }
}
function volver():void {        
    resetearFront()

    // resetear carta
    actualizarCarta(0)
    mostrarCarta(0)

    // resetear mensaje
    cambioMensajito("no te pases de 7,5", 2)
}


// boton Retirarse
if (botonDOMRetirarse) {
    botonDOMRetirarse.addEventListener("click", () => { retirarse() });
}
function comprobarRetirada() {
    if (puntuacionActual <= 4) {
        cambioMensajito("Has sido muy conservador", 1 )
    } else if (puntuacionActual > 4 && puntuacionActual <= 5) {
        cambioMensajito("Te ha entrado el canguelo eh?", 1)
    } else if (puntuacionActual > 5 && puntuacionActual <= 7) {
        
    } else {
        cambioMensajito("No deberias ver esto", 3)
    }
}
function cambiarBotones() {
    if (botonRetirarse instanceof HTMLButtonElement && botonDameCarta instanceof HTMLButtonElement && botonDOMSiguienteCarta instanceof HTMLButtonElement && botonDOMVolver instanceof HTMLButtonElement) {
        botonRetirarse.style.display = "none";
        botonDameCarta.style.display = "none";
        botonDOMSiguienteCarta.style.display = "block"
        botonDOMVolver.style.display = "block";
    }
}
function retirarse() {
    comprobarRetirada()

    // desactivamos botones
    cambiarBotones()
}
        

