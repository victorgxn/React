import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'

describe('Pruebas en archivo 07', () => {
  test('should retornar un string y un numero', () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe('ABC');
    expect(numbers).toBe(123)
  })

})
