import Planet from './../src/planet.js';

describe('Planets', () => {
  let planetList;
  let planet1;
  let planet2;
  beforeEach(() => {
    planetList = new PlanetList();
    planet1 = new Planet('Earth','Terran',1);
    planet2 = new Planet('Mars','Martian',1.88);
    planetList.addPlanets([planet1,planet2]);
  }
})
