import { generadorNumeroAleatorio } from "./motor";

describe("generadorNumeroAleatorio specs", () => {
  it("should return a number between 1 and NumMax, adjusted by rules", () => {
    // Arrange
    const NumMax = 12;

    // Act
    const resultado = generadorNumeroAleatorio(NumMax);

    // Assert
    if (resultado > 7) {
      // Cuando el número original es mayor a 7, debería ser ajustado con +2
      expect(resultado).toBeGreaterThanOrEqual(10); // 8 + 2 mínimo
      expect(resultado).toBeLessThanOrEqual(14); // 12 + 2 máximo
    } else {
      // Cuando el número original es menor o igual a 7, no debería cambiar
      expect(resultado).toBeGreaterThanOrEqual(1);
      expect(resultado).toBeLessThanOrEqual(7);
    }
  });

  it("should return an integer", () => {
    // Arrange
    const NumMax = 12;

    // Act
    const resultado = generadorNumeroAleatorio(NumMax);

    // Assert
    expect(Number.isInteger(resultado)).toBe(true);
  });

  it("should throw an error if NumMax is 0 or less", () => {
    // Arrange
    const invalidNums = [0, -1, -5];

    // Act & Assert
    invalidNums.forEach((max) => {
      expect(() => generadorNumeroAleatorio(max)).toThrow();
    });
  });
});