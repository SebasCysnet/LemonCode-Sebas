import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

//@ts-ignore
const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 40,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// Apartado 5
interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

// apartado 1 - pacientes asignados a Pediatria
//@ts-ignore
function obtenPacientesAsignadosAPediatria(pacientes: Pacientes[]): Pacientes[] {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra");
};

//@ts-ignore
function obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes: Pacientes[]): Pacientes[] {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);
}; 

//console.log(obtenPacientesAsignadosAPediatria(pacientes))
//console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes))

// apartado 2 protocolo de Urgencia
const esPacienteEnUrgencia = (pacientes: Pacientes): boolean => {
    return pacientes.frecuenciaCardiaca >= 100 && pacientes.temperatura >= 39;
};

//@ts-ignore
function activarProtocoloUrgencia(pacientes: Pacientes[]): boolean {
    const pacienteEnUrgencia = pacientes.find(esPacienteEnUrgencia);
    if (pacienteEnUrgencia) {
        return true;
    }
    // si llega hasta aquí es que no hay pacientes en urgencia
    return false;
};
// console.log(activarProtocoloUrgencia(pacientes));


// apartado 3 pasar de pediatria a medico de familia
// funcion que devuelve si el paciente es de pediatria
const esPacienteDePediatria = (pacientes: Pacientes): boolean => {
    return pacientes.especialidad === "Pediatra";
};

const reasignaEspecialidadAMedicoFamilia = (pacientes: Pacientes): void => {
    pacientes.especialidad = "Medico de familia";
};

//@ts-ignore
function reasignaPacientesAMedicoFamilia(pacientes: Pacientes[]): Pacientes[]{
    // filtramos los pacientes de pediatria y los guardamos en un nuevo array
    const pacientesPediatria = pacientes.filter(esPacienteDePediatria);

    // Reasignar especialidad a cada paciente
    pacientesPediatria.forEach(reasignaEspecialidadAMedicoFamilia);

    return pacientesPediatria;
};
// console.log(reasignaPacientesAMedicoFamilia(pacientes));

// apartado 4 mandar el pedriatra a casa o no
//@ts-ignore
function hayPacientesDePediatria(pacientes: Pacientes[]): boolean{
    // buscamos si hay algun paciente de pediatria
    const existePacientePediatria = pacientes.some(paciente => {
        if (esPacienteDePediatria(paciente)) {
            return true;
        }
        // si llega aquí es que no hay pacientes de pediatria ,por lo que mandamos al pediatra a casa
        return false;
    });
    // si lleg a aquí es que hay por lo menos un paciente de pediatria, mandamos quienes son
    return existePacientePediatria;
};
//console.log(hayPacientesDePediatria(pacientes));

// apartado 5 contar pacientes por especialidad
const inicializarContadorEspecialidades = (): NumeroPacientesPorEspecialidad => ({
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
});

// funcion que incrementa el contador de pacientes por especialidad
const incrementarContador = (contador: NumeroPacientesPorEspecialidad, especialidad: string): void => {
    switch (especialidad) {
        case "Medico de familia":
            contador.medicoDeFamilia++;
            break;
        case "Pediatra":
            contador.pediatria++;
            break;
        case "Cardiólogo":
            contador.cardiologia++;
            break;
        default:
            console.error("Especialidad desconocida: " + especialidad);
    }
};

// funcion principal que cuenta los pacientes por especialidad
//@ts-ignore
function cuentaPacientesPorEspecialidad(pacientes: Pacientes[]): NumeroPacientesPorEspecialidad {
    const contador = inicializarContadorEspecialidades();

    pacientes.forEach(paciente => {
        incrementarContador(contador, paciente.especialidad);
    });

    return contador;
};
//console.log(cuentaPacientesPorEspecialidad(pacientes));