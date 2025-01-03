import "./style.css";
import axios from "axios";

const API_URL = "http://localhost:3000/personajes";
const barraInput = document.getElementById("filter-input") as HTMLInputElement;
const botonFiltro = document.getElementById("filter-button") as HTMLButtonElement;
const botonLimpiarFiltro = document.getElementById("clear-button") as HTMLButtonElement;
const contenedorCartas = document.getElementById("card-container") as HTMLDivElement;

botonFiltro.addEventListener("click", manejarFiltro);
botonLimpiarFiltro.addEventListener("click", listarTodosLosPersonajes);

interface Personaje {
  id: string;
  nombre: string;
  apodo: string;
  especialidad: string;
  habilidades: string[];
  amigo: string;
  imagen: string;
}

async function listarPersonajes(): Promise<Personaje[]> {
  const response = await axios.get<Personaje[]>(API_URL);
  return response.data;
}

async function buscarPersonajeEncajeFiltro(filtro: string): Promise<Personaje[]> {
  const response = await axios.get<Personaje[]>(`${API_URL}?nombre_like=${filtro}`);
  return response.data;
}

function creacionCarta(personajes: Personaje[]) {
    // Limpiar el contenedor de cartas
    contenedorCartas.innerHTML = "";
  
    if (personajes.length === 0) {
      contenedorCartas.innerHTML = "<p>No se encontraron personajes</p>";
      return;
    }
  
    // Crear la maquetacion de las cartas con los datos
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

// busca coincidencias del filtro
async function manejarFiltro() {
  const filtro = barraInput.value.trim();
  if (!filtro){
    return alert("Por favor, introduce un texto para filtrar");
  }
  const coincidencias = await buscarPersonajeEncajeFiltro(filtro);
  creacionCarta(coincidencias);
}

// lista a todos los personajes
async function listarTodosLosPersonajes() {
    // como esta funcion se usa tambien para limpiar, dejamos esto para limpiar el input
    barraInput.value = "";
    const personajes = await listarPersonajes();
    creacionCarta(personajes);
}

listarTodosLosPersonajes();