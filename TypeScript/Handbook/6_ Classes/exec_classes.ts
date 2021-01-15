

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


