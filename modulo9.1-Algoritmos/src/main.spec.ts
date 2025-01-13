import { asociarTipoIvaYCalcular, calcularIVA, calcularSoloIva, calcularPrecioConIva } from "./main";
import { TipoIva } from "./model";

describe("calcularIVA, asociarTipoIvaYCalcular", () => {
    it("Debería calcular el IVA ", () => {
      // Arrange
      const precioTotalSinIva: number = 10
      const procentajeDeIva: number = 10
      // Act
      const resultado = calcularIVA(precioTotalSinIva, procentajeDeIva)
      // Assert
      expect(resultado).toBe(1); // 1
    });

    it("Deberia  junto con el tipo de Iva en String calcular el Iva junto con el precio sin iva", () => {
      // Arrange
      //@ts-ignore
      const tipoIva: string = "general"
      const precioTotalSinIva: number = 10
      // Act
      const resultado = asociarTipoIvaYCalcular(tipoIva, precioTotalSinIva)
      // Assert
      expect(resultado).toBe(2.1); // 2.1
    });
});

describe("calcularSoloIva", () => {
  it("Deberia calcular solo el IVA del producto ", () => {
    // Arrange
    const precioConIva: number = 14
    const precioSinIva: number = 10
    // Act
    const resultado = calcularSoloIva(precioConIva, precioSinIva)
    // Assert
    expect(resultado).toBe(4); // 4
  });
});

describe("calcularPrecioConIva", () => {

  it("Deberia calcular bien el Iva", () => {
    // Arrange
    const precioTotalSinIva: number = 14
    const tipoIvaString: TipoIva ="superreducidoA";
    // Act 
    const resultado = calcularPrecioConIva(precioTotalSinIva, tipoIvaString)

    // Assert
    expect(resultado).toBe(14.7); // 14.7
  });
});