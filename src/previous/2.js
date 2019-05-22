
class Person {

  name
  age
  protected weight 

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.weight = 120;
  }
  eat() {
    alert(`${this.name} eat sth`);
  }

  speak() {
    alert(`${this.name}, age ${this.age}`);
  }
}

let rick = new Person('rick', 40);
let leo = new Person('leo', 30);

// rick.speak();

class Student extends Person {
  number
  private girlfriend
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
    this.girlfriend = 'jj';
  }

  study() {
    alert(`${this.name} study`);
  }

  getWeight() {
    alert(`${this.weight}`);
  }
}

let frych = new Student('frych', 23, 666);
frych.study();