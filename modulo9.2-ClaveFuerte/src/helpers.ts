import { ValidacionClave } from "./model";

// comprobacion de Min y MAY
export function tieneMayusculasYMinusculas(clave: string): ValidacionClave {
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
    if (!tieneMayuscula) errorMensaje = "Debe contener al menos una letra mayuscula"
    if (!tieneMinuscula) errorMensaje = "Debe contener al menos una letra minuscula"

    return { esValida: false, error: errorMensaje };
}

// comprobacion de Numeros
export function tieneNumeros(clave: string): ValidacionClave  {
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
export function tieneCaracteresEspeciales(clave: string): ValidacionClave {
    // Comprobamos si algún carácter cumple con la condición de ser especial
    const contieneCaracterEspecial = clave.split("").some((caracter) => (caracter >= ' ' && caracter <= '/') || (caracter >= ':' && caracter <= '@') || (caracter >= '[' && caracter <= '`') || (caracter >= '{' && caracter <= '~') );

    /*for (let i = 0; i < clave.length; i++) {
        const char = clave[i];
        // segun la tabla ASCII
        if ((char >= ' ' && char <= '/') || (char >= ':' && char <= '@') || (char >= '[' && char <= '`') || (char >= '{' && char <= '~') ) {
            tieneNumeros = true
            return {esValida: true}
        }
    }*/
    if (contieneCaracterEspecial) {
        return { esValida: true };
    } else {
        return {
            esValida: false,
            error: "Debe contener al menos un caracter especial",
        };
    }
}

// Longitud min de 8 caracteres
export function tieneLongitudMinima(clave: string): ValidacionClave { 
    if (clave.length < 8) {
        return { esValida: false, error: "Debe contener al menos 8 caracteres" }
    }
    // Si llega aqui esque tiene 8 o mas caracteres
    return { esValida: true };
};

export function comprobarDosStrings(clave:string, prohibida:string): boolean {
    if (clave.includes(prohibida)) {
        return true
    }
    return false
}

// no debe tener nombre de usuario
export function tieneNombreUsuario (nombreUsuario: string ,clave: string ): ValidacionClave { 
    if (comprobarDosStrings(clave, nombreUsuario)) {
        console.error(`se ha encontrado el nombre de usuario!! ${clave} ${nombreUsuario}`)
        return { esValida: true, error: "La contraseña no debe contener el nombre de usuario" }
    }
    return {esValida: false}

};

export function tienePalabrasComunes(clave: string, commonPasswords: string[]): ValidacionClave { 
    const palabraProhibida = commonPasswords.find(prohibida => comprobarDosStrings(clave, prohibida));

    if (palabraProhibida) {
        console.error(`Se ha intentado colar una de las palabras prohibidas: ${clave}`);
        return {
            esValida: true,
            error: "La contraseña no debe contener algunas de las palabras prohibidas",
        };
    }
    return { esValida: false };
}
