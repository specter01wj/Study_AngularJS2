

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
	class Person {
		protected name: string;
		
		constructor(name: string) {
			this.name = name;
		}
	}

	class Employee2 extends Person {
		private department: string;
		
		constructor(name: string, department: string) {
			super(name);
    	this.department = department;
		}

		public get value() : string {
			return this.department;
		}

		public set value(v : string) {
			this.department = v;
		}

		public getElevatorPitch() {
	    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	  }
	}

	let howard = new Employee2("Howard", "Sales");
	console.log(howard.getElevatorPitch());
	console.log(howard.value);
	howard.value = 'Engineer';
	console.log(howard.value);
	// console.log(howard.name);


	class Person2 {
	  protected name: string;
	  protected constructor(theName: string) {
	    this.name = theName;
	  }
	}

	// Employee can extend Person
	class Employee3 extends Person2 {
	  private department: string;

	  constructor(name: string, department: string) {
	    super(name);
	    this.department = department;
	  }

	  public getElevatorPitch() {
	    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
	  }
	}

	let howard2 = new Employee3("Howard", "Sales");
	// let john = new Person2("John");
	console.log(howard2.getElevatorPitch());



	// Readonly modifier







	// Parameter properties









	// Accessors







	// Static Properties







	// Abstract Classes








	// Advanced Techniques
	// Constructor functions








	// Using a class as an interface









}


