class Animals {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  makeNoise() {
    console.log("Meew");
  }

  static aRandomMethod() {
    console.log("Called without instiating.");
  }

  get someData() {
    return `${this.type}, ${this.legs}`;
  }
}

class Cat extends Animals {
  constructor(type, legs, tails) {
    super(type, legs);
    this.tails = tails;
  }

  makeNoise() {
    console.log("Meew");
  }
}

// Instantiation

const cat = new Cat("Cat", 4, true);

console.log(cat.tails);

const valueOfGetter = cat.someData;
console.log(valueOfGetter);
