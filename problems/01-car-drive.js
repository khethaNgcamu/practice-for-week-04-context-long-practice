// Your code here
class Car {
	constructor(){
		this.speed = 0;
	}

	drive(newSpeed){
		return this.speed = newSpeed;
	}
}


// let car = new Car();
// car.drive(0);     // => returns 0
// console.log(car)

// car.drive(10);    // => returns 10
// console.log(car);

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}