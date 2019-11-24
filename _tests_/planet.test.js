import Planet from './../src/planet.js';
import Age from './../src/age.js';

describe('Planet', () => {
  let reuseablePlanet;
  beforeEach(() => {
    reuseablePlanet = new Planet('Earth',1);
  })
  test('Confirms planet constructor works', () => {
    expect(reuseablePlanet.period).toEqual(1);
    expect(reuseablePlanet.name).toEqual('Earth');
  });
})
