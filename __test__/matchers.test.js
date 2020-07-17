describe("Comparadores comunes", () => {
  const userOne = {
    name: "jorge",
    lastname: "rangel",
  };
  const userTwo = {
    name: "jorge",
    lastname: "rangel",
  };
  test("igualdad de elementos", () => {
    expect(userOne).toEqual(userTwo);
  });
});
