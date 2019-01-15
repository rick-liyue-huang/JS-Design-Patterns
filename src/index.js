
class Person {
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

let Rick = new Person('Rick', 30);
Rick.eat();
Rick.speak();




















