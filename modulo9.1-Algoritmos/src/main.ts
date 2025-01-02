import "./style.css";
import { productos, LineaTicket, ResultadoLineaTicket, IvaDeProductos, ResultadoLineaTiket, tiketFinalObjeto, resultadosTotales, ResultadoTotalTicket, TotalPorTipoIva, TipoIva } from "./model";

// Calcula el IVA
function calcularIVA(precioTotalSinIva: number, procentajeDeIva: number): number {
    let iva = (precioTotalSinIva * procentajeDeIva)/100;
    //console.log(`el Iva del producto sale a ${iva`)
    return iva
}

// Calcula el precio con IVA
function calcularPrecioConIva(precioTotalSinIva: number, tipoIvaString: TipoIva):number {
    let precioTotal:number;
    let iva:TotalPorTipoIva = { tipoIva: tipoIvaString, cuantia : 0 }

    if (tipoIvaString == "general") {
        iva.cuantia = calcularIVA(precioTotalSinIva, 21)
        precioTotal = precioTotalSinIva + iva.cuantia
    } else if (tipoIvaString == "reducido") {
        iva.cuantia = calcularIVA(precioTotalSinIva, 10);
        precioTotal = precioTotalSinIva + iva.cuantia;
    } else if (tipoIvaString == "superreducidoA") {
        iva.cuantia = calcularIVA(precioTotalSinIva, 5);
        precioTotal = precioTotalSinIva + iva.cuantia;
    } else if (tipoIvaString == "superreducidoB") {
        iva.cuantia = calcularIVA(precioTotalSinIva, 4);
        precioTotal = precioTotalSinIva + iva.cuantia;
    } else {
        iva.cuantia = 0;
        precioTotal = precioTotalSinIva; // Sin IVA
    }

    // lo metemos en el array de Iva´s
    IvaDeProductos.push(iva)

    return precioTotal ;
}

//funcion para iterar por cada producto
// rellenando la interface de "resultadoLineaTiket"
function calculaTiket (lineasTicket: LineaTicket[]) {
    for (let i = 0; i < lineasTicket.length; i++) {
        const element = lineasTicket[i];
        let lineaTiket: ResultadoLineaTicket = { nombre: "", cantidad: 0, precionSinIva: 0, tipoIva: "general", precioConIva: 0 }
        // asignamos valores que nos pasan de serie, como nombre, cantidad, TipoIva
        lineaTiket.nombre = element.producto.nombre
        lineaTiket.cantidad = element.cantidad
        lineaTiket.tipoIva = element.producto.tipoIva

        // calcular precio total sin IVA
        lineaTiket.precionSinIva = lineaTiket.cantidad * element.producto.precio

        // calcular precio total Con Iva
        lineaTiket.precioConIva = calcularPrecioConIva(lineaTiket.precionSinIva, element.producto.tipoIva)
        console.log(`Producto: ${lineaTiket.nombre}, Cantidad: ${lineaTiket.cantidad}, PrecioSinIva: ${lineaTiket.precionSinIva}, Iva: ${lineaTiket.tipoIva}, precio con Iva: ${lineaTiket.precioConIva}`)

        //precio Solo IVA
        let soloIva:number =  parseFloat((lineaTiket.precioConIva - lineaTiket.precionSinIva).toFixed(2));
        //console.warn(soloIva)

        //meter el objeto obtenido anteriormente en un nuevo array que contendrá todas las lineas
        ResultadoLineaTiket.push(lineaTiket)

        // meter los valores al array de "ResultadoTotalTicket"
        let ResultadoTotalTicket:ResultadoTotalTicket = {totalSinIva: lineaTiket.precionSinIva, totalConIva: lineaTiket.precioConIva, totalIva: soloIva }
        resultadosTotales.push(ResultadoTotalTicket)
    }
}

calculaTiket(productos)
//console.error(`solo los IVA´s ${IvaDeProductos[0].cuantia}`)

function preparacionDeTiketFinal() {
    let totalSinIva = 0;
    let totalConIva = 0;
    let totalIva = 0;

    ResultadoLineaTiket.forEach((linea) => {
        // metemos cada linea en el array
        tiketFinalObjeto.lineas.push(linea);
        // aprovechamos para ir sacanbdo los valores ya sumados
        totalSinIva += linea.precionSinIva;
        totalConIva += linea.precioConIva;
    });

    // Sumar desglose de IVA
    IvaDeProductos.forEach((iva) => {
        // metemos el desglose de los Iva´s
        tiketFinalObjeto.desgloseIva.push(iva);

        //aprovechamos para sacar el total de IVA
        totalIva += iva.cuantia;
    });

    // metemos finalmente todos los totales
    tiketFinalObjeto.total = {
        totalSinIva: totalSinIva,
        totalConIva: totalConIva,
        totalIva: totalIva
    };
}

preparacionDeTiketFinal()

console.log(tiketFinalObjeto)