import Age from './age.js';

export default class Person {
  constructor(age, health) {
    this.age = age,
    this.lifeExpectancy,
    this.health = health;

  }
  setExpectancy() {
    let expectancy = 50;
    this.health.forEach(function(healthThing) {
      if (healthThing){
        expectancy += 5;
      } else {
        expectancy -= 5;
      }
    });
    this.lifeExpectancy = new Age(expectancy);
  }
}
