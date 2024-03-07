import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08', () => {
  test('should getHeroyByid debe retornar un heroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    });
  })

  test('should getHeroyByid debe retornar un heroe por id', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  })

  test('should deberia devolver los heroes que tenga owner DC', () => {
    const owner = 'DC';
    const arrDC = getHeroesByOwner(owner);
    expect(arrDC.length).toBe(3)
  })

  test('should deberia devolver los heroes que tenga owner Marvel', () => {
    const owner = 'Marvel';
    const arrMarvel = getHeroesByOwner(owner);
    expect(arrMarvel.length).toBe(2)
  })


})
