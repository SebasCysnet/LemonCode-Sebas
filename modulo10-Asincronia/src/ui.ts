import { Personaje } from "./model";

const barraInput = document.getElementById("filter-input") as HTMLInputElement;
const contenedorCartas = document.getElementById("card-container") as HTMLDivElement;

export function limpiarBarraInput() {
  if (barraInput instanceof HTMLInputElement) {
    barraInput.value = "";
  }
}

export function obtenerFiltro(): string {
  return barraInput.value.trim();
}

export function mostrarError(mensaje: string) {
  alert(mensaje);
}

export function creacionCarta(personajes: Personaje[]) {
  if (contenedorCartas instanceof HTMLDivElement) {
    contenedorCartas.innerHTML = "";
    
  }

  if (personajes.length === 0) {
    contenedorCartas.innerHTML = "<p>No se encontraron personajes</p>";
    return;
  }

  personajes.forEach((personaje) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="assets/${personaje.imagen}" alt="${personaje.nombre}">
      <h3>${personaje.nombre} (${personaje.apodo})</h3>
      <p><strong>Especialidad:</strong> ${personaje.especialidad}</p>
      <p><strong>Habilidades:</strong> ${personaje.habilidades.join(", ")}</p>
    `;

    contenedorCartas.appendChild(card);
  });
}