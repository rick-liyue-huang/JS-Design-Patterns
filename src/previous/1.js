
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
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
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }

  study() {
    alert(`${this.name} study`);
  }
}

let frych = new Student('frych', 23, 666);
frych.study();