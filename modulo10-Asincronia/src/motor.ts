import axios from "axios"
import { Personaje } from "./model"

const API_URL = "http://localhost:3000/personajes"

export async function listarPersonajes(): Promise<Personaje[]> {
    const response = await axios.get<Personaje[]>(API_URL)
    return response.data
}
  
export async function buscarPersonajeEncajeFiltro(filtro: string): Promise<Personaje[]> {
    const response = await axios.get<Personaje[]>(`${API_URL}?nombre_like=${filtro}`)
    return response.data
}