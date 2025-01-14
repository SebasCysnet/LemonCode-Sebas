import "./style.css"
import { listarPersonajes, buscarPersonajeEncajeFiltro } from "./motor"
import { creacionCarta, limpiarBarraInput, obtenerFiltro, mostrarError } from "./ui"

const botonFiltro = document.getElementById("filter-button");
const botonLimpiarFiltro = document.getElementById("clear-button")

if (botonFiltro instanceof HTMLButtonElement) {
  botonFiltro.addEventListener("click", manejarFiltro)
}

if (botonLimpiarFiltro instanceof HTMLButtonElement) {
  botonLimpiarFiltro.addEventListener("click", listarTodosLosPersonajes)
  
}

async function manejarFiltro() {
  const filtro = obtenerFiltro()
  if (!filtro) {
    mostrarError("Por favor, introduce un texto para filtrar")
    return
  }
  const coincidencias = await buscarPersonajeEncajeFiltro(filtro)
  creacionCarta(coincidencias)
}

async function listarTodosLosPersonajes() {
  limpiarBarraInput()
  const personajes = await listarPersonajes()
  creacionCarta(personajes)
}

document.addEventListener("DOMContentLoaded", (): void => {
  listarTodosLosPersonajes()
});


