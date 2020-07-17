import { sumar, restar, multiplicar, dividir } from "../maths";

describe("Calculos matematicos", () => {
  test("Prueba de sumar", () => {
    expect(sumar(1, 1)).toBe(2);
  });

  test("Prueba de restar", () => {
    expect(restar(1, 1)).toBe(0);
  });

  test("Prueba de multiplicar", () => {
    expect(multiplicar(2, 5)).toBe(10);
  });

  test("Prueba de dividir", () => {
    expect(dividir(4, 2)).toBe(2);
  });
});
