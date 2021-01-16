

namespace demo_06_01 {

	// Classes
	class Greeter {
		greeting: string;
		
		constructor(message: string) {
			this.greeting = message;
		}

		greet() {
			return 'Hello, ' + this.greeting;
		}
	}

	let greeter = new Greeter('world');
	console.log(greeter.greet());



	// Inheritance
	class Animal {
		
		move(distanceInMeters: number = 0) {
			console.log(`Animal moved ${distanceInMeters}m.`);
		}
	}

	class Dog extends Animal {
		
		bark() {
			console.log("Woof! Woof!");
		}
	}

	const dog = new Dog();
	dog.bark();
	dog.move(10);
	dog.bark();



	

	// Public by default





	// ECMAScript Private Fields





	// Understanding TypeScript’s private






	// Understanding protected








	// Readonly modifier







	// Parameter properties









	// Accessors







	// Static Properties







	// Abstract Classes








	// Advanced Techniques
	// Constructor functions








	// Using a class as an interface









}


