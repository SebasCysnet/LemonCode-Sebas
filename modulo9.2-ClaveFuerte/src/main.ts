import "./style.css";
import { ValidacionClave, passWord, usuario, commonPasswords } from "./model";
import { tieneMayusculasYMinusculas, tieneNumeros, tieneCaracteresEspeciales, tieneLongitudMinima, tieneNombreUsuario, tienePalabrasComunes } from "./helpers";

// funcion FINAL
export function validarClave( nombreUsuario: string, clave: string, commonPasswords: string[] ): ValidacionClave {
    let resultadoMayMin = tieneMayusculasYMinusculas(clave)
    if (!resultadoMayMin.esValida) return resultadoMayMin

    let resultadoNumeros = tieneNumeros(clave)
    if (!resultadoNumeros.esValida) return resultadoNumeros

    let resultadoEspeciales = tieneCaracteresEspeciales(clave)
    if (!resultadoEspeciales.esValida) return resultadoEspeciales

    let resultadoLongitud = tieneLongitudMinima(clave)
    if (!resultadoLongitud.esValida) return resultadoLongitud

    let resultadoUsuario = tieneNombreUsuario(nombreUsuario, clave)
    if (resultadoUsuario.esValida) return { esValida: false, error: "La contraseña no debe contener el nombre de usuario" }

    let resultadoPalabras = tienePalabrasComunes(clave, commonPasswords)
    if (resultadoPalabras.esValida) return { esValida: false, error: "La contraseña no debe contener algunas de las palabras prohibidas" };

    return { esValida: true };
}

validarClave(usuario, passWord, commonPasswords)