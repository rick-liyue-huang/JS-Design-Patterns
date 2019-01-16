// one carpark has three levels, each level has 100 carpot; each carpot can monitor car in and out; before car enter the carpark, show the available carpots on each level; when car enter, entry monitor can know car number and time; when car out, exit monitor can know car number and park time.

// car
class Car {
	constructor(num) {
		this.num = num;
	}
}

// entry camera
class Camera {
	shot(car) {
		return {
			num: car.num,
			inTime: Date.now()
		}
	}
}

// exit screen
class Screen {
	show(car, inTime) {
		console.log('number', car.num);
		console.log('park time', Date.now() - inTime);
	}
}

// carpark
class Park {
	constructor(floors) {
		this.floors = floors || [];
		this.camera = new Camera();
		this.screen = new Screen();
		this.carList = {}; // return monitor return info
	}
	in(car) {
		const info = this.camera.shot(car);
		// park in place
		const i = parseInt(Math.random() * 100 % 100);
		const place = this.floors[0].places[i];
		place.in();
		info.place = place;
		// record info
		this.carList[car.num] = info
	}

	out(car) {
		// get info
		const info = this.carList[car.num];
		// empty place
		const place = info.place;
		place.out();
		// show time
		this.screen.show(car, info.inTime);
		// delete record
		delete this.carList[car.num];
	}
	emptyNum() {
		return this.floors.map(floor => {
			return `${floor.index} has ${floor.emptyPlaceNum()} empty places`
		}).join('\n');
	}
}

// floor
class Floor {
	constructor(index, places) {
		this.index = index;
		this.places = places || [];
	}

	emptyPlaceNum() {
		let num = 0;
		this.places.forEach( p => {
			if(p.empty) {
				num = num + 1;
			}
		})
		return num;
	}
}

// place
class Place {
	constructor(empty) {
		this.empty = true;
	}
	in() {
		this.empty = false;
	}
	out() {
		this.empty = true;
	}
}

// test
// initiate park
const floors = [];
for(let i = 0; i < 3; i++) {
	const places = [];
	for (let j = 0; j < 100; j++) {
		places[j] = new Place()
	}
	floors[i] = new Floor(i + 1, places);
}

const park = new Park(floors);

// initiate car
const car1 = new Car(100);
const car2 = new Car(200);
const car3 = new Car(300);

console.log('first car in');
console.log(park.emptyNum());
park.in(car1);

console.log('second car in');
console.log(park.emptyNum());
park.in(car2);
console.log('first car out');
park.out(car1);
console.log('second car out');
park.out(car2);
console.log('third car in');
park.in(car3);
console.log('third car out');
park.out(car3);











