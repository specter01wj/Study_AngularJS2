

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


	class Animal2 {
		name: string;
		
		constructor(theName: string) {
			this.name = theName;
		}

		move(distanceInMeters: number = 0) {
			console.log(`${this.name} moved ${distanceInMeters}m.`);
		}
	}

	class Snake extends Animal2 {
		
		constructor(name: string) {
			super(name);
		}

		move(distanceInMeters: number = 5) {
			console.log("Slithering...");
			super.move(distanceInMeters);
		}
	}

	class Horse extends Animal2 {

	  constructor(name: string) {
	    super(name);
	  }

	  move(distanceInMeters = 45) {
	    console.log("Galloping...");
	    super.move(distanceInMeters);
	  }
	}

	let sam = new Snake("Sammy the Python");
	let tom: Animal2 = new Horse("Tommy the Palomino");

	sam.move();
	tom.move(34);



	// Public by default
	class Animal3 {
	  public name: string;

	  public constructor(theName: string) {
	    this.name = theName;
	  }

	  public move(distanceInMeters: number) {
	    console.log(`${this.name} moved ${distanceInMeters}m.`);
	  }
	}



	// ECMAScript Private Fields
	class Animal4 {
	  #name: string; // private
	  constructor(theName: string) {
	    this.#name = theName;
	  }
	}

	// new Animal4("Cat").#name;



	// Understanding TypeScript’s private
	class Animal5 {
	  private name: string;

	  constructor(theName: string) {
	    this.name = theName;
	  }
	}

	// new Animal5("Cat").name;


	class Animal6 {
	  private name: string;
	  constructor(theName: string) {
	    this.name = theName;
	  }
	}

	class Rhino extends Animal6 {
	  constructor() {
	    super("Rhino");
	  }
	}

	class Employee {
	  private name: string;
	  constructor(theName: string) {
	    this.name = theName;
	  }
	}

	let animal = new Animal6("Goat");
	console.log(animal);
	let rhino = new Rhino();
	let employee = new Employee("Bob");

	animal = rhino;
	console.log(animal);
	// animal = employee;

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


