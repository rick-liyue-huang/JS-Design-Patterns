
class People {
  constructor(name, house) {
    this.name = name;
    this.house = house;
  }
  saySth() {}
}

class House {
  constructor(city) {
    this.city = city;
  }
  showCity() {}
}

class A extends People {
  constructor(name, house) {
    super(name, house);
  }
  saySth() {
    console.log('A');
  }
}

class B extends People {
  constructor(name, house) {
    super(name, house);
  }
  saySth() {
    console.log('B');
  }
}

let aHouse = new House('beijing');
let a = new A('rick', aHouse);

let bHouse = new House('mel');
let b = new B('leo');