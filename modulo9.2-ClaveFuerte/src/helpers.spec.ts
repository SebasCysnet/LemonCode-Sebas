import { tieneMayusculasYMinusculas, tieneNumeros , tieneCaracteresEspeciales, tieneLongitudMinima, comprobarDosStrings, tieneNombreUsuario, tienePalabrasComunes} from "./helpers"
import { validarClave } from "./main"
import { commonPasswords } from "./model"

describe("tieneMayusculasYMinusculas", () => {
    it("Debería devolver false si no hay mayúsculas", () => {
        // Arrange
        const palabra = "soloenminusculas"

        // Act
        const resultado = tieneMayusculasYMinusculas(palabra)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos una letra mayuscula",
        })
    })

    it("Debería devolver false si no hay minúsculas", () => {
        // Arrange
        const palabra = "SOLOENMAYUSCULAS"

        // Act
        const resultado = tieneMayusculasYMinusculas(palabra)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos una letra minuscula",
        })
    })

    it("Debería devolver true si tiene al menos una mayúscula y una minúscula", () => {
        // Arrange
        const palabra = "Valida123"

        // Act
        const resultado = tieneMayusculasYMinusculas(palabra)

        // Assert
        expect(resultado).toEqual({
            esValida: true,
        })
    })
})

describe("tieneNumeros", () => {
    it("Debería devolver true si tiene al menos un número", () => {
        // Arrange
        const clave = "clave123"

        // Act
        const resultado = tieneNumeros(clave)

        // Assert
        expect(resultado).toEqual({
            esValida: true,
        })
    })

    it("Debería devolver false si no tiene numeros", () => {
        // Arrange
        const clave = "claveSuperFuerte"

        // Act
        const resultado = tieneNumeros(clave)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos un numero"
        })
    })
})

describe("tieneCaracteresEspeciales", () => {
    it("Debería devolver true si tiene al menos un carácter especial", () => {
        // Arrange
        const clave = "clave@123"

        // Act
        const resultado = tieneCaracteresEspeciales(clave)

        // Assert
        expect(resultado).toEqual({
            esValida: true,
        })
    })

    it("Debería devolver false si no tiene caracteres especiales", () => {
        // Arrange
        const clave = "clave123"

        // Act
        const resultado = tieneCaracteresEspeciales(clave)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos un caracter especial",
        })
    })
})

describe("tieneLongitudMinima", () => {
    it("Debería devolver true si tiene al menos mas de 8 caracteres", () => {
        // Arrange
        const clave = "clave@12323"

        // Act
        const resultado = tieneLongitudMinima(clave)

        // Assert
        expect(resultado).toEqual({
            esValida: true,
        })
    })

})

describe("comprobarDosStrings", () => {
    it("Debería devolver true si la stringPRohibida esta dentro de la contraseña", () => {
        // Arrange
        const contraseña = "clave@12323"
        const stringProhibida = "clave"

        // Act
        const resultado = comprobarDosStrings(contraseña, stringProhibida)

        // Assert
        expect(resultado).toEqual(true)
    })
    it("Debería devolver false si la stringPRohibida no esta dentro de la contraseña", () => {
        // Arrange
        const contraseña = "clave@12323"
        const stringProhibida = "pepe"

        // Act
        const resultado = comprobarDosStrings(contraseña, stringProhibida)

        // Assert
        expect(resultado).toEqual(false)
    })

})

describe("tieneNombreUsuario", () => {
    it("Debería devolver true si el nombre de usuario esta dentro de la contraseña", () => {
        // Arrange
        const contraseña = "cysnetsebas2024"
        const nombreDeUsuario = "sebas"

        // Act
        const resultado = tieneNombreUsuario(nombreDeUsuario, contraseña)

        // Assert
        expect(resultado).toEqual({
            esValida: true,
            error: "La contraseña no debe contener el nombre de usuario"
        })
    })
    it("Debería devolver false si la nombre de usuario no esta dentro de la contraseña", () => {
        // Arrange
        const contraseña = "cysnetsebas2024"
        const nombreDeUsuario = "pepe"

        // Act
        const resultado = tieneNombreUsuario(nombreDeUsuario, contraseña)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
        })
    })
})

describe("tienePalabrasComunes", () => {
    it("Debería devolver true si la contraseña contiene alguna de las palabras prohibidas", () => {
        // Arrange
        const contraseña = "password"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = tienePalabrasComunes(contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: true,
            error: "La contraseña no debe contener algunas de las palabras prohibidas"
        })
    })
    it("Debería devolver false si la contraseña no contiene alguna de las palabras prohibidas", () => {
        // Arrange
        const contraseña = "cysnetsebas2024"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = tienePalabrasComunes(contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
        })
    })
})

describe("validarClave", () => {
    it("Debería devolver false si la contraseña no tiene mayus o minus ", () => {
        // Arrange
        const nombreUsuario = "sebas"
        const contraseña = "password"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = validarClave(nombreUsuario, contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos una letra mayuscula",
        })
    })
    it("Debería devolver false si la contraseña no tiene numeros ", () => {
        // Arrange
        const nombreUsuario = "sebas"
        const contraseña = "passwordSuperSeguro"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = validarClave(nombreUsuario, contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos un numero",
        })
    })
    it("Debería devolver false si la contraseña no tiene caracteres Especiales ", () => {
        // Arrange
        const nombreUsuario = "sebas"
        const contraseña = "passwordSuperSeguro123"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = validarClave(nombreUsuario, contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos un caracter especial",
        })
    })
    it("Debería devolver false si la contraseña no tiene mas de 8 caracteres ", () => {
        // Arrange
        const nombreUsuario = "sebas"
        const contraseña = "passS1_"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = validarClave(nombreUsuario, contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "Debe contener al menos 8 caracteres",
        })
    })
    it("Debería devolver false si la contraseña contiene el nombre del usuario ", () => {
        // Arrange
        const nombreUsuario = "sebas"
        const contraseña = "passWordSuperSeguro123@sebas"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = validarClave(nombreUsuario, contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "La contraseña no debe contener el nombre de usuario",
        })
    })
    it("Debería devolver false si la contraseña contiene alguna palabraProhibida", () => {
        // Arrange
        const nombreUsuario = "pepe"
        const contraseña = "Cysnet2024%"
        const ArrayDePalabrasProhibidas = commonPasswords

        // Act
        const resultado = validarClave(nombreUsuario, contraseña, ArrayDePalabrasProhibidas)

        // Assert
        expect(resultado).toEqual({
            esValida: false,
            error: "La contraseña no debe contener algunas de las palabras prohibidas",
        })
    })


})