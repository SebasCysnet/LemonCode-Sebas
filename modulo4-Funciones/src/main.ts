import "./style.css";

let turnoActual = 42;

function actualizarTurno() {
    const turno = document.getElementById("turno")
    if (turno) {
        turno.textContent = turnoActual.toString().padStart(2, "0");
    } else {
        console.error("No se encontró el elemento con id 'turno'")
    }
}
actualizarTurno()

function revisionTurno( nuevoTurno:number ) {
    if (nuevoTurno <= 0) {
        return false
    }
    return true
}

// SUMA
const botonSuma = document.getElementById("suma");
if (botonSuma) {
    botonSuma.addEventListener("click", () => {
        turnoActual++
        actualizarTurno()
    });
}

// RESTA
const botonResta = document.getElementById("resta");
if (botonResta) {
    botonResta.addEventListener("click", () => {
        if (revisionTurno(turnoActual)) {
            turnoActual--;
            actualizarTurno();
        } else {
            console.log ("ya ha llegado a 0")
        }
    });
}

// MANUAL
const botonCambiar = document.getElementById("cambiarTurnoManual");
const inputTurno = document.getElementById("input-turno") as HTMLInputElement;
if (botonCambiar && inputTurno) {
    botonCambiar.addEventListener("click", () => {
        const nuevoTurno = parseInt(inputTurno.value, 10)
        if (!isNaN(nuevoTurno) && revisionTurno(nuevoTurno)) {
            turnoActual = nuevoTurno
            actualizarTurno()
        } else {
            console.error("El valor ingresado no es un número válido")
        }
    })
}

// resset a 0
const botonResset = document.getElementById("resset");
if (botonResset) {
    botonResset.addEventListener("click", () => {
        turnoActual = 0
        actualizarTurno()
    })
}