
// give some samples for OO and Design Patterns

// 1. when call taxi, we can call type1 or type2, any taxi has plate and name; different type has different price, type1 is $1, type2 is $2; when taxi start drive it shows taxi infomation, and when finish drive it shows price under 5km. needs UML and ES6 code.


// analyse: class and associate with each other.

class Car {
	constructor(number, name) {
		this.number = number;
		this.name = name;
	}
}

class Type1 extends Car {
	constructor(number, name) {
		super(number, name);
		this.price = 1;
	}
}

class Type2 extends Car {
	constructor(number, name) {
		super(number, name);
		this.price = 2;
	}
}


class Trip {
	constructor(car) {
		this.car = car;
	}
	start() {
		console.log(`trip begin, name: ${this.car.name}, number: ${this.car.number}`);
	}
	end() {
		console.log(`trip end, price: ` + (this.car.price * 5))
	}
}

let car = new Type1(100, 'audi');
console.log(car.name);
let trip = new Trip(car);
console.log(trip);
trip.start();
trip.end();












