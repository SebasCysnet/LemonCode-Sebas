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
    if (puntuacionActual > 7.5 && botonRetirarse && botonDOMVolver && botonDameCarta) {
        console.error(`te has pasado!!`)
        // activamos y desactivamos botones
        botonRetirarse.style.display = "none";
        botonDameCarta.style.display = "none";
        botonDOMVolver.style.display = "block";
        // activar mensaje "game Over"
        cambioMensajito("GAME OVER, te has pasado amigo", 0)
    } 
    else if (puntuacionActual == 7.5 && botonRetirarse && botonDOMVolver && botonDameCarta) {
        console.error(`LO HAS CLAVADO!!`)
        // activamos y desactivamos botones
        botonRetirarse.style.display = "none";
        botonDameCarta.style.display = "none";
        botonDOMVolver.style.display = "block";
        // activar mensaje "game Over"
        cambioMensajito("¡ Lo has clavado! ¡Enhorabuena!", 1)
    }
}

// Actualizacion de PTOS del usuario
function actualizarPtosUsuario(cartaSeleccionada:number) {
    if (cartaSeleccionada >= 10 ) {
        puntuacionActual += 0.5
    } else {
        puntuacionActual += cartaSeleccionada
    }
    // Actualizar en DOM el numero
    if (puntuacionUsuario !== undefined && puntuacionUsuario !== null) {
        puntuacionUsuario.textContent = puntuacionActual.toString()
    } else {
        console.log("algo ha pasado al sumar puntos al usuario")
    }
    console.warn(`actualmente tienes ${puntuacionActual} puntos`)
    // comprobar si ha pasado de 7,5()
     comprobador()
}

//actualizar Imagen de la carta
function mostrarCarta(cartaSeleccionada:number) {
    if (imgCarta !== undefined && imgCarta !== null) {
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

// Actualizacion de nueva carta
function actualizarCarta(cartaSeleccionada:number) {
    if (cartaSeleccionada >= 10 ) {
        puntuacionNuevaCarta = 0.5
    } else {
        puntuacionNuevaCarta = cartaSeleccionada
    }
    //Actualizacion de DOM
    if (puntuacionDOMCarta !== undefined && puntuacionDOMCarta !== null) {
        puntuacionDOMCarta.textContent = puntuacionNuevaCarta.toString()
    } else{
        console.log("algo ha pasado al actualizar los datos de la carta")
    }
    mostrarCarta(cartaSeleccionada)
}

// Dame carta
if (botonDameCarta) {
    botonDameCarta.addEventListener("click", () => {
        // elige un numero del 1 al 10 y lo capturamos en una variable
        let sacaNumero = Math.floor(Math.random() * 10) +1

        // si el numero es mayor de 7 suma 2            // sota= 10 -- Caballo= 11 -- rey= 12
        if (sacaNumero > 7) {
            carta = sacaNumero + 2
        } else {
            carta = sacaNumero
        }

        console.log(`ha salido la carta ${carta}`)

        // ejecutamos funcion de actualizar ptos del usuario si esta en pleno juego
        actualizarPtosUsuario(carta)

        // ejecutamos funcion de actualizar la imagen y los punos
        actualizarCarta(carta)
    });
}

// Siguiente carta
if (botonDOMSiguienteCarta) {
    botonDOMSiguienteCarta.addEventListener("click", () => {
        // elige un numero del 1 al 10 y lo capturamos en una variable
        let sacaNumero = Math.floor(Math.random() * 10) +1

        // si el numero es mayor de 7 suma 2            // sota= 10 -- Caballo= 11 -- rey= 12
        if (sacaNumero > 7) {
            carta = sacaNumero + 2
        } else {
            carta = sacaNumero
        }
        // ejecutamos funcion de actualizar la imagen y los punos
        actualizarCarta(carta)
    })
}

// Boton Volver
if (botonDOMVolver) {
    botonDOMVolver.addEventListener("click", () => {
        
        if (puntuacionUsuario && botonDameCarta && botonDOMSiguienteCarta && botonRetirarse) {
            // resetear puntos actuales
            puntuacionActual = 0
            puntuacionUsuario.textContent = puntuacionActual.toString();
            botonDameCarta.style.display = "block";
            botonDOMSiguienteCarta.style.display = "none"
            botonDOMVolver.style.display = "none"
            botonRetirarse.style.display = "block"
        }

        // resetear carta
        actualizarCarta(0)
        mostrarCarta(0)

        // resetear mensaje
        cambioMensajito("no te pases de 7,5", 2)
    })
}

// boton Retirarse
if (botonDOMRetirarse) {
    botonDOMRetirarse.addEventListener("click", () => {
        if (puntuacionActual <= 4) {
            cambioMensajito("Has sido muy conservador", 1 )
        } else if (puntuacionActual > 4 && puntuacionActual <= 5) {
            cambioMensajito("Te ha entrado el canguelo eh?", 1)
        } else if (puntuacionActual > 5 && puntuacionActual <= 7) {
            
        } else {
            cambioMensajito("No deberias ver esto", 3)
        }

        if (botonRetirarse && botonDameCarta && botonDOMVolver && botonDOMSiguienteCarta) {
            botonRetirarse.style.display = "none";
            botonDameCarta.style.display = "none";
            botonDOMSiguienteCarta.style.display = "block"
            botonDOMVolver.style.display = "block";
        }
        
    })
}
