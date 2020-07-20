/** Despues de cada prueba */
afterEach(() => {
  console.log("Despues de cada prueba");
});

/** Despues de todas pruebas */
afterAll(() => {
  console.log("Despes de todas las pruebas");
});

/** Antes de cada pruebas */
beforeEach(() => {
  console.log("Antes de cada pruebas");
});

/** Antes de todas pruebas */
beforeAll(() => {
  console.log("Antes de todas las pruebas");
});

describe("Preparar antes de ejecutar", () => {
  test("Es verdadero", () => {
    expect(true).toBeTruthy();
  });
});
