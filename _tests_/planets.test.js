import Planet from './../src/planet.js';
import PlanetList from './../src/planetlist.js';

describe('Planets', () => {
  let planetList;
  let planet1;
  let planet2;
  beforeEach(() => {
    planetList = new PlanetList();
  })
  test('Confirms constructor built planets correctly', () => {
    expect(planetList.planets).toEqual([]);
  });
  test('Confirms addPlanet works', () => {
    planet1 = new Planet('Earth','Terran',1);
    planet2 = new Planet('Mars','Martian',1.88);
    planetList.addPlanet(planet1);
    planetList.addPlanet(planet2);
    expect(planetList.planets.length).toEqual(2);
  })
});
