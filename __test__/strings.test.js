describe("Comprobar cadenas de texto", () => {
  const text = "Hola Mundo!!!";
  test("debe contener el siguiente texto", () => {
    expect(text).toMatch(/Hola/);
  });

  test("No contiene el siguiente texto", () => {
    expect(text).not.toMatch(/No/);
  });

  test("Comprobar el tamaño de un texto", () => {
    expect(text).toHaveLength(13);
  });
});
