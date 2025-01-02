export type TipoIva = | "general" | "reducido" | "superreducidoA" | "superreducidoB" | "superreducidoC" | "sinIva";
export interface Producto { nombre: string; precio: number; tipoIva: TipoIva;}
export interface LineaTicket { producto: Producto; cantidad: number; }
export const productos: LineaTicket[] = [
    { producto: { nombre: "Legumbres", precio: 2, tipoIva: "general",},
      cantidad: 2,
    },
    { producto: { nombre: "Perfume", precio: 20, tipoIva: "general",},
      cantidad: 3,
    },
    { producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC",},
      cantidad: 6,
    },
    { producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA",},
      cantidad: 1,
    },
];

// --------------  Para resultados  -----------------

export interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precionSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}
export interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

export interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia : number;
}

export interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

export let IvaDeProductos:TotalPorTipoIva [] = []
export let ResultadoLineaTiket: ResultadoLineaTicket[] = []
export let resultadosTotales: ResultadoTotalTicket [] = []

export let tiketFinalObjeto: TicketFinal = {
  lineas: [],
  total: { totalSinIva: 0, totalConIva: 0, totalIva: 0 },
  desgloseIva: []
};