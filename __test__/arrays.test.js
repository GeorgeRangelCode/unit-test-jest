import { arrayFruits, arrayColors } from "../arrays";

describe("Comprobar que existe un elemento", () => {
  test("¿Contiene una banana?", () => {
    expect(arrayFruits()).toContain("banana");
  });

  test("No contiene una banana", () => {
    expect(arrayFruits()).not.toContain("mora");
  });

  test("Comprobar el tamaño de un array", () => {
    expect(arrayColors()).toHaveLength(5);
  });
});
