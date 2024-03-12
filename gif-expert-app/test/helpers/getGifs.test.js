import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs"

describe('getGifs', () => {
  test('should retornar un arreglo de divs', async () => {
    const gifs = await getGifs();
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
