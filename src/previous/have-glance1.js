
class Person { // parent class
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	eat() {
		console.log(`${this.name} eat`);
	}

	speak() {
		console.log(`${this.age}`);
	}
}

let Rick = new Person('Rick', 40);
Rick.eat();
Rick.speak();

class Student extends Person { // child class
	constructor(name, age, number) {
		super(name, age);
		this.number = number;
	}

	study() {
		console.log(`${this.name} ,${this.number} is my number`)
	}
}

let Leo = new Student('leo', 20, 300);
Leo.study();

// polym

class People {
  constructor(name) {
    this.name = name;
  }
  saySth() {

  }
}

class A extends People {
  constructor(name) {
    super(name);
  }
  saySth() {
    console.log('I am A');
  }
}

class B extends People {
  constructor(name) {
    super(name);
  }
  saySth() {
    console.log('I am B'); 
  }
}

let a = new A('a');
let b = new B('b');
a.saySth(); // i am a
b.saySth(); // i am b


















