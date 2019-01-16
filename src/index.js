
class People {
  constructor(name, house) {
    this.name = name;
    this.house = house;
  }
  saySth() {}
}

class A extends People {
  constructor(name, house) {
    super(name, house);
  }
  saySth() {
    console.log(`I am A and live in`);
  }
}

class B extends People {
  constructor(name, house) {
    super(name, house);
  }
  saySth() {
    console.log(`I am B, `);
  }
}

class House {
  constructor(city) {
    this.city = city;
  }
  showCity() {
    console.log(`house in ${this.city}`);
  }
}

let ahouse = new House('mel');
let a = new A('a', ahouse);
a.saySth();
let b = new B('b');
b.saySth();