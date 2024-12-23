import { generadorNumeroAleatorio, comprobarisWin} from "./motor";

describe("generadorNumeroAleatorio", () => {
    it("Debería generar un número aleatorio entre 0 y el número proporcionado", () => {
      // Arrange
      const maximo: number = 10
      // Act
        const resultado = generadorNumeroAleatorio(maximo)
      // Assert
      expect(typeof resultado).toBe("number"); // Verifica que el resultado sea un número
    });
});

describe("comprobarisWin", () => {
    it("deberia dar 0 o 1 o 2", () => {
      // Arrange
      const numTest1: number = 7.5
      const numTest2: number = 10
      const numTest0: number = 0.5
  
      // Act
      const resultado1 = comprobarisWin(numTest1)
      const resultado2 = comprobarisWin(numTest2)
      const resultado0 = comprobarisWin(numTest0)

      // Assert
      expect(resultado1).toBe(1); // Verifica que el resultado sea 1, osea que ha ganado
      expect(resultado2).toBe(2); // Verifica que el resultado sea 2, osea que se ha pasado
      expect(resultado0).toBe(0); // Verifica que el resultado sea 0, osea que continua el juego
    });
});