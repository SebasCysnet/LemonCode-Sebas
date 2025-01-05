import './style.css'

// Clase de reserva
class Reserva {
    tipoHabitacion: 'standard' | 'suite';
    nPersonasHospedadas: number
    noches: number

    constructor(tipoHabitacion: 'standard' | 'suite', nPersonasHospedadas: number, noches: number) {
        this.tipoHabitacion = tipoHabitacion
        this.nPersonasHospedadas = nPersonasHospedadas
        this.noches = noches
    }
}

// Clase para clientes particulares
class ClienteParticular {
    reservas: Reserva[]
    precios: { standard: number, suite: number }

    constructor(reservas: Reserva[]) {
        this.reservas = reservas
        this.precios = { standard : 100, suite: 150 }
    }

    calcularSubtotal(): number {
        let subtotal = 0
        for (const reserva of this.reservas) {
            const precioBase = this.precios[reserva.tipoHabitacion] // 100 o 150
            const precioAdicional = (reserva.nPersonasHospedadas - 1) * 40 // sacar el precio por persona adicional (doy por echo que si son 2 personas se sumaria +40, si fueran 3 +80, etc)
            subtotal += (precioBase + precioAdicional) * reserva.noches
        }
        return subtotal
    }

    calcularTotal(): number {
        const subtotal = this.calcularSubtotal()
        return subtotal * 1.21; // IVA del 21%
    }
}

// Clase para tour operadores
class TourOperador {
    reservas: Reserva[]
    precioFijo: number = 100

    constructor(reservas: Reserva[]) {
        this.reservas = reservas
    }

    calcularSubtotal(): number {
        let subtotal = 0
        for (const reserva of this.reservas) {
            subtotal += this.precioFijo * reserva.noches
        }
        return subtotal
    }

    calcularTotal(): number {
        const subtotal = this.calcularSubtotal()
        const descuento = subtotal * 0.15 // Descuento del 15%
        return (subtotal - descuento) * 1.21 // Aplicar IVA del 21%
    }
}

const reservas = [
    new Reserva("standard", 1, 3),
    new Reserva("standard", 1, 4),
    new Reserva("suite", 2, 1)
];

// Cliente Particular
console.log("Cliente Particular:")
const clienteParticular = new ClienteParticular(reservas)
console.log("Subtotal:", clienteParticular.calcularSubtotal(), "€")
console.log("Total con IVA:", clienteParticular.calcularTotal(), "€")

// Tour Operador
console.log("\nTour Operador:")
const tourOperador = new TourOperador(reservas)
console.log("Subtotal:", tourOperador.calcularSubtotal(), "€")
console.log("Total con IVA:", tourOperador.calcularTotal(), "€")