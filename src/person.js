import Age from './age.js';

export default class Person {
  constructor(age, health) {
    this.age = new Age(age),
    this.lifeExpectancy,
    this.health = health,
    this.toLive;
  } // constructor(age, health)
  setExpectancy() {
    let expectancy = 50;
    this.health.forEach(function(healthThing) {
      if (healthThing){
        expectancy += 5;
      } else {
        expectancy -= 5;
      }
    }); // this.health.forEach(function(healthThing))
    this.lifeExpectancy = new Age(expectancy);
    this.toLive = new Age( this.lifeExpectancy.earthAge - this.age.earthAge);
  } // setExpectancy()
} // export default class Person
