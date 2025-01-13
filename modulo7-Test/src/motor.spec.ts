import { numeroAleatorio, comprobadorCarta, comprobarisWin} from "./motor";

describe("generadorNumeroAleatorio", () => {
    it("Debería generar un número aleatorio entre 0 y 12", () => {
      // Arrange
      const maximo: number = 10
      // Act
        const resultado = numeroAleatorio(maximo)
      // Assert
      expect(typeof resultado).toBe("number"); // Verifica que el resultado sea un número
    });
});

describe("comprobadorCarta", () => {
  it("Deberia pasar la carta que sea mayor de 7, ser sumada mas 2 ", () => {
    // Arrange
    const numeroDeCarta: number = 8 // deberia darnos 10
    const numeroDeCarta2: number = 5 // deberia darnos 5
    // Act
      const resultado = comprobadorCarta(numeroDeCarta)
      const resultado2 = comprobadorCarta(numeroDeCarta2)
    // Assert
    expect(resultado).toBe(10); // Verifica que el resultado sea un número
    expect(resultado2).toBe(5); // Verifica que el resultado sea un número
  });
});

describe("comprobarisWin", () => {
    it("deberia dar 0 (sigue el juego)", () => {
      // Arrange
      const numTest0: number = 0.5
  
      // Act
      const resultado0 = comprobarisWin(numTest0)

      // Assert
      expect(resultado0).toBe(0); // Verifica que el resultado sea 0, osea que continua el juego
    });
    it("deberia dar 1 (ha ganado la partida)", () => {
      // Arrange
      const numTest1: number = 7.5
  
      // Act
      const resultado1 = comprobarisWin(numTest1)

      // Assert
      expect(resultado1).toBe(1); // Verifica que el resultado sea 1, osea que ha ganado
    });
    it("deberia dar 2 (se ha pasado de 7.5)", () => {
      // Arrange
      const numTest2: number = 10
  
      // Act
      const resultado2 = comprobarisWin(numTest2)

      // Assert
      expect(resultado2).toBe(2); // Verifica que el resultado sea 2, osea que se ha pasado
    });
});