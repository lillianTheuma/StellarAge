import Person from './../src/person.js';
import Age from './../src/age.js';


describe('Person', () => {
  let reuseablePerson;
  beforeEach(() => {
    reuseablePerson = new Person(100,[true,true,true]);
    reuseablePerson.setExpectancy();
  })

  test('Confirms constructor built the person correctly', () => {
    expect(reuseablePerson.lifeExpectancy).toEqual(new Age(65));
  })
})
