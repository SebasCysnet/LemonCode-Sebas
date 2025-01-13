import "./style.css";
import { productos, LineaTicket, ResultadoLineaTicket, IvaDeProductos, ResultadoLineaTiket, tiketFinalObjeto, resultadosTotales, ResultadoTotalTicket, TotalPorTipoIva, TipoIva } from "./model";

// Calcula el IVA
export function calcularIVA(precioTotalSinIva: number, procentajeDeIva: number): number {
    return (precioTotalSinIva * procentajeDeIva)/100;
}

export function asociarTipoIvaYCalcular(tipoIva: string, precioTotalSinIva:number): number {
    let respuesta:number = 0
    switch (tipoIva) {
        case "general":
            respuesta = calcularIVA(precioTotalSinIva, 21)
            break;
        case "reducido":
            respuesta = calcularIVA(precioTotalSinIva, 10)
            break;
        case "superreducidoA":
            respuesta = calcularIVA(precioTotalSinIva, 5)
            break;
        case "superreducidoB":
            respuesta = calcularIVA(precioTotalSinIva, 4)
            break;
        case "superreducidoC":
            respuesta = calcularIVA(precioTotalSinIva, 4)
            break;
    
        default:
            throw new Error("Tipo de IVA no válido");
    }
    return respuesta
}

// Calcula el precio con IVA
export function calcularPrecioConIva(precioTotalSinIva: number, tipoIvaString: TipoIva):number {
    let precioTotal:number;
    let iva:TotalPorTipoIva = { 
        tipoIva: tipoIvaString, 
        cuantia : 0 
    }
    // asociamos el tipo de iva que va a ser
    iva.cuantia = asociarTipoIvaYCalcular(tipoIvaString, precioTotalSinIva)
    // sumamos el precio total sin el iva con el precio del IVA
    precioTotal = precioTotalSinIva + iva.cuantia

    // lo metemos en el array de Iva´s
    IvaDeProductos.push(iva)

    return precioTotal ;
}

function calularPrecioSinIva(cantidad:number, precio:number):number {
    return cantidad * precio
}

function crearLineaTicket(element: LineaTicket): ResultadoLineaTicket {
    const lineaTicket: ResultadoLineaTicket = {
        nombre: element.producto.nombre,
        cantidad: element.cantidad,
        tipoIva: element.producto.tipoIva,
        precionSinIva: calularPrecioSinIva(element.cantidad, element.producto.precio),
        precioConIva: calcularPrecioConIva(
            calularPrecioSinIva(element.cantidad, element.producto.precio),
            element.producto.tipoIva
        ),
    };

    return lineaTicket;
}

export function calcularSoloIva(precioConIva: number, precioSinIva: number): number {
    return parseFloat((precioConIva - precioSinIva).toFixed(2));
}

function crearResumenTotalTicket(lineaTicket: ResultadoLineaTicket): ResultadoTotalTicket {
    return {
        totalSinIva: lineaTicket.precionSinIva,
        totalConIva: lineaTicket.precioConIva,
        totalIva: calcularSoloIva(lineaTicket.precioConIva, lineaTicket.precionSinIva),
    };
}

//funcion para iterar por cada producto
// rellenando la interface de "resultadoLineaTiket"
function calculaTiket (lineasTicket: LineaTicket[]) {
    lineasTicket.map((element) => {
        // Crear línea del ticket
        const lineaTiket = crearLineaTicket(element);

        console.log(`Producto: ${lineaTiket.nombre}, Cantidad: ${lineaTiket.cantidad}, PrecioSinIva: ${lineaTiket.precionSinIva}, Iva: ${lineaTiket.tipoIva}, PrecioConIva: ${lineaTiket.precioConIva}`)

        //meter el objeto obtenido anteriormente en un nuevo array que contendrá todas las lineas
        ResultadoLineaTiket.push(lineaTiket);

        // meter los valores al array de "ResultadoTotalTicket"
        const resumenTotal = crearResumenTotalTicket(lineaTiket);
        resultadosTotales.push(resumenTotal);
    })
}

calculaTiket(productos)
//console.error(`solo los IVA´s ${IvaDeProductos[0].cuantia}`)

function calcularTotalConIva(): number {
    return ResultadoLineaTiket.reduce((total, linea) => total + linea.precioConIva, 0);
}

function calcularTotalSinIva(): number {
    return ResultadoLineaTiket.reduce((total, linea) => total + linea.precionSinIva, 0);
}

function calculoTotalIVA(): number {
    return IvaDeProductos.reduce((total, iva) => total + iva.cuantia, 0);
}

function preparacionDeTiketFinal(): void {
    let totalSinIva = calcularTotalConIva();
    let totalConIva = calcularTotalSinIva()
    let totalIva = calculoTotalIVA()

    // metemos finalmente todos los totales
    tiketFinalObjeto.total = {
        totalSinIva: parseFloat(totalSinIva.toFixed(2)),
        totalConIva: totalConIva,
        totalIva: totalIva
    };
}

preparacionDeTiketFinal()

console.log(tiketFinalObjeto)