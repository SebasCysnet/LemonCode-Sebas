import "./style.css"
import { extraerImagenes } from "./motor"
import {mostrarResultados } from "./ui"

const textArea = document.getElementById("html-input")
const botonDOMExtraerImagenes = document.getElementById("extract-button")

// boton DOM del "extraer imagenes"
// retorna un array de imagenes
if (botonDOMExtraerImagenes instanceof HTMLButtonElement) {
  botonDOMExtraerImagenes.addEventListener("click", () => {
    if (textArea instanceof HTMLTextAreaElement ) {
      const html = textArea.value // Capturamos todo lo que haya en el textarea
      const imageUrls = extraerImagenes(html) // Extraemos las URLs de las imagenes
      mostrarResultados(imageUrls) // Mostramos los resultados en el DOM
    }
  })
}