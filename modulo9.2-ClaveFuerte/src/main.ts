import "./style.css";
import { ValidacionClave, passWord, usuario, commonPasswords } from "./model";


// comprobacion de Min y MAY
function tieneMayusculasYMinusculas(clave: string): ValidacionClave {
    let tieneMayuscula = false
    let tieneMinuscula = false
    for (let i = 0; i < clave.length; i++) {
        const char = clave[i]
        if (char >= 'A' && char <= 'Z') {
            tieneMayuscula = true
        } else if (char >= 'a' && char <= 'z') {
            tieneMinuscula = true
        }
        // Si ambas condiciones se cumplen, devolvemos validación positiva
        if (tieneMayuscula && tieneMinuscula) {
            return { esValida: true }
        }
    }
    // Si termina el bucle sin cumplir ambas condiciones
    let errorMensaje = "";
    if (!tieneMayuscula) errorMensaje = "Debe contener al menos una letra mayúscula. "
    if (!tieneMinuscula) errorMensaje = "Debe contener al menos una letra minúscula."

    return { esValida: false, error: errorMensaje };
}

// comprobacion de Numeros
function tieneNumeros(clave: string): ValidacionClave  {
    let tieneNumeros = false;
    for (let i = 0; i < clave.length; i++) {
        const char = clave[i];
        if (char >= '0' && char <= '9') {
            tieneNumeros = true
            return {esValida: true}
        }
    }
    // Si termina el bucle sin encontrar un numero
    let errorMensaje = "";
    if (!tieneNumeros) errorMensaje = "Debe contener al menos un numero";

    return { esValida: false, error: errorMensaje };
}

// Comprobacion de caracteres especiales
function tieneCaracteresEspeciales(clave: string): ValidacionClave {
    let tieneNumeros = false;
    for (let i = 0; i < clave.length; i++) {
        const char = clave[i];
        // segun la tabla ASCII
        if ((char >= ' ' && char <= '/') || (char >= ':' && char <= '@') || (char >= '[' && char <= '`') || (char >= '{' && char <= '~') ) {
            tieneNumeros = true
            return {esValida: true}
        }
    }
    // Si termina el bucle sin encontrar un caracter especial
    let errorMensaje = "";
    if (!tieneNumeros) errorMensaje = "Debe contener al menos un caracter especial";

    return { esValida: false, error: errorMensaje };
}

// Longitud min de 8 caracteres
function tieneLongitudMinima(clave: string): ValidacionClave { 
    if (clave.length < 8) {
        return { esValida: false, error: "Debe contener al menos 8 caracteres" }
    }
    // Si llega aqui esque tiene 8 o mas caracteres
    return { esValida: true };
};

function comprobarDosStrings(clave:string, prohibida:string): boolean {
    if (clave.includes(prohibida)) {
        return true
    }
    return false
}

// no debe tener nombre de usuario
function tieneNombreUsuario (nombreUsuario: string ,clave: string ): ValidacionClave { 
    if (comprobarDosStrings(clave, nombreUsuario)) {
        console.error(`se ha encontrado el nombre de usuario!! ${clave} ${nombreUsuario}`)
        return { esValida: false, error: "La contraseña no debe contener el nombre de usuario" }
    }
    return {esValida: true}

};

// no debe contener palabras comunes
function tienePalabrasComunes( clave: string, commonPasswords: string[]): ValidacionClave { 
    for (let i = 0; i < commonPasswords.length; i++) {
        const passProhibida = commonPasswords[i];
        if (comprobarDosStrings(clave, passProhibida, )) {
            console.error(`se ha intentado colar una de las palabras prohibidas!! ${clave}, ${passProhibida}`)
            return { esValida: false, error: "La contraseña no debe contener algunas de las palabras prohibidas" }
        }
    }
    return {esValida: true}
};

// funcion FINAL
function validarClave( nombreUsuario: string, clave: string, commonPasswords: string[] ): ValidacionClave {
    let resultadoMayMin = tieneMayusculasYMinusculas(clave)
    if (!resultadoMayMin.esValida) return resultadoMayMin

    let resultadoNumeros = tieneNumeros(clave)
    if (!resultadoNumeros.esValida) return resultadoNumeros

    let resultadoEspeciales = tieneCaracteresEspeciales(clave)
    if (!resultadoEspeciales.esValida) return resultadoEspeciales

    let resultadoLongitud = tieneLongitudMinima(clave)
    if (!resultadoLongitud.esValida) return resultadoLongitud

    let resultadoUsuario = tieneNombreUsuario(nombreUsuario, clave)
    if (!resultadoUsuario.esValida) return resultadoUsuario

    let resultadoPalabras = tienePalabrasComunes(clave, commonPasswords)
    if (!resultadoPalabras.esValida) return resultadoPalabras;

    return { esValida: true };
}

validarClave(usuario, passWord, commonPasswords)