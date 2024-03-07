import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Prueba 02', () => {
  test('getSaludo debe retornarnar Hola Fernando', () => {
    const name = 'Fernando';
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  })

})
