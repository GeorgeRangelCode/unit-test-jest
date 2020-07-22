import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("Es hora de las intantaneas", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();

    /** jest -u => actualiza los snapshots */
  });
  test("Siempre fallara la instantanea", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };

    // expect(user).toMatchSnapshot();
  });

  test("Tenemos una excepción dentro del codigó", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Jorge Rangel",
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});
