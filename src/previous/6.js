
class Car {
  constructor(number, name) {
    this.number = number;
    this.name = name;
  }
}

class Express extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 2;
  }
}

class Normal extends Car {
  constructor(number, name) {
    super(number, name);
    this.price = 1;
  }
}

class Trip {
  constructor(car) {
    this.car = car;
  }
  start() {
    console.log(`${this.car.name} - ${this.car.number}`)
  }

  end() {
    console.log(`${this.car.price}`);
  }
}

let express = new Express(100, 'express');
let normal = new Normal(200, 'normal');

let t = new Trip(express);
t.start();
t.end();