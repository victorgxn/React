import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('should de retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({
          id: 1,
          name: 'Batman',
          owner: 'DC'
        });
        done();
      })
  })

  test('should debe obtener un error si el heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch(error => {
        expect(error).toBe(`No se pudo encontrar el heroe con el id ${id}`);
        done();
      })
  })

})
