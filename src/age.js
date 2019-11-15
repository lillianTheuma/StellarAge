export default class Age {
  constructor(age) {
    this.earthAge = age,
    this.mercuryAge = (age / 0.24),
    this.venusAge = (age / 0.62),
    this.marsAge = (age / 1.88),
    this.jupiterAge = (age / 11.86);
  } // constructor(age)
} // export default class Age
