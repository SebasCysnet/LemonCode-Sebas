import "./style.css";

const pediatraDisponible = true

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

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 46.8,
    frecuenciaCardiaca: 170,
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

// APARTADO 1
// si es de PEDRIATRIA
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    let listaPacientesPediatra: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad == "Pediatra") {
            //console.log(`${pacientes[i].nombre}, es de pediatria`);
            listaPacientesPediatra.push(pacientes[i])
        }
        //console.log(`vuelta ${i}, ${listaPacientesPediatra}`)
    }
    return listaPacientesPediatra
};
const pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);

// si es de PEDIATRIA y menor de 10 años
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = ( pacientes: Pacientes[]): Pacientes[] => {
    let listaPacientesPediatraYmenor: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad == "Pediatra" && pacientes[i].edad < 10) {
            //console.warn(`${pacientes[i].nombre}, es de pediatria y ademas menor de 10 años`);
            listaPacientesPediatraYmenor.push(pacientes[i])
        }
    }
    return listaPacientesPediatraYmenor
};
const pacientesPediatriaYMenor = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(`Tenemos un paciente menor llamado: ${pacientesPediatriaYMenor[0].nombre}`);

// APARTADO 2
// si es una Urgencia
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca >= 100 && pacientes[i].temperatura >= 39) {
            activarProctolo = true
            console.error(`Tenemos una Urgencia! el paciente ${pacientes[i].nombre} tiene ${pacientes[i].temperatura} de fiebre y ${pacientes[i].frecuenciaCardiaca} de frecuencia cardiaca`)
            break
        }
    }
    return activarProctolo;
};

// APARTADO 3 - Pasar de pediatria a medico de familia
const reasignaPacientesAMedicoFamilia = ( pacientes: Pacientes[]): Pacientes[] => {
    let listaPacientesPediatraAMedicoFamilia: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad == "Pediatra") {
            //console.log(`${pacientes[i].nombre}, es de pediatria`);
            listaPacientesPediatraAMedicoFamilia.push(pacientes[i])
            pacientes[i].especialidad = "Medico de familia"
        }
        //console.log(`vuelta ${i}, ${listaPacientesPediatra}`)
    }
    return listaPacientesPediatraAMedicoFamilia
};

// APARTADO 4
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let isPediatraNecesary = false
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad == "Pediatra") {
            console.warn(`${pacientes[i].nombre}, es de pediatria, EL PEDIATRA SE QUEDA`);
            isPediatraNecesary = true
        }
    }
    return isPediatraNecesary
};

// APARTADO 5

const inicializarContadorEspecialidades = (): NumeroPacientesPorEspecialidad => ({
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
});
  
const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[], contador: NumeroPacientesPorEspecialidad): NumeroPacientesPorEspecialidad => {
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad == "Medico de familia") {
            contador.medicoDeFamilia++;
        } else if (pacientes[i].especialidad == "Pediatra") {
            contador.pediatria++;
        } else if (pacientes[i].especialidad == "Cardiólogo") {
            contador.cardiologia++
        } else {
            console.error ("algo ha apsado en el apartado 5")
        }
    }
    return contador
};


// Apartado 1
obtenPacientesAsignadosAPediatria(pacientes)
obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)

// Apartado 2
activarProtocoloUrgencia(pacientes)

// Apartado 3
// mira si esta el medico de pediatria
if(!pediatraDisponible) { reasignaPacientesAMedicoFamilia(pacientes)};
// comprobacion de quienes estan con el medio de familia
for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad == "Medico de familia") {
        console.log(`Tenemos un paciente Medico de Cabecera llamado: ${pacientes[i].nombre}`);
    }
}

// Apartado 4
HayPacientesDePediatria(pacientes)

// Apartado 5
// Inicializa el contador usando el constructor basado en la interfaz
const contadorEspecialidades = inicializarContadorEspecialidades();

// Cuenta los pacientes por especialidad
const resultado = cuentaPacientesPorEspecialidad(pacientes, contadorEspecialidades);
console.log(resultado);