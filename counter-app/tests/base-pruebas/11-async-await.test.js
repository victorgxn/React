import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('11-async-await', () => {
  test('should debe retornar un url de la imagen', async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe('string');
  })

})
