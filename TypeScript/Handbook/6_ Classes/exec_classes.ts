﻿

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
	class Octopus {
	  readonly name: string;
	  readonly numberOfLegs: number = 8;

	  constructor(theName: string) {
	    this.name = theName;
	  }
	}

	let dad = new Octopus("Man with the 8 strong legs");
	console.log(dad.name);
	// dad.name = "Man with the 3-piece suit";



	// Parameter properties
	class Octopus2 {
	  readonly numberOfLegs: number = 8;
	  constructor(readonly name: string) {}
	}

	let dad2 = new Octopus2("Man with the 8 strong legs_2");
	console.log(dad2.name);



	// Accessors
	class Employee4 {
	  fullName: string;
	}

	let employee4 = new Employee4();
	employee4.fullName = "Bob Smith";

	if (employee4.fullName) {
	  console.log(employee4.fullName);
	}


	const fullNameMaxLength = 10;

	class Employee5 {
		private _fullNmae: string = '';

		public get fullName() : string {
			return this._fullNmae;
		}

		public set fullName(newName : string) {
			if (newName && newName.length > fullNameMaxLength) {
	      throw new Error("fullName has a max length of " + fullNameMaxLength);
	    }
			this._fullNmae = newName;
		}

	}

	let employee5 = new Employee5();
	employee5.fullName = 'James Wang';

	if (employee5.fullName) {
	  console.log(employee5.fullName);
	}

	// employee5.fullName = 'Giannis Antetokounmpo';
	// console.log(employee5.fullName);


	
	// Static Properties
	class Grid {
		static origin = {x: 0, y: 0};
		
		constructor(public scale: number) {
			// code...
		}

		calculateDistanceFromOrigin(point: {x: number; y: number}) {
			let xDist = point.x - Grid.origin.x;
	    let yDist = point.y - Grid.origin.y;
	    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
		}

	}

	let grid1 = new Grid(1.0);
	let grid2 = new Grid(5.0);

	console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
	console.log(grid2.calculateDistanceFromOrigin({ x: 20, y: 30 }));



	// Abstract Classes
	abstract class Animal7 {
		abstract makeSound(): void;
		
		move(): void {
			console.log("roaming the earth...");
		}
	}


	abstract class Department {
	  constructor(public name: string) {}

	  printName(): void {
	    console.log("Department name: " + this.name);
	  }

	  abstract printMeeting(): void;
	}


	class AccountingDepartment extends Department {
	  constructor() {
	    super("Accounting and Auditing");
	  }

	  printMeeting(): void {
	    console.log("The Accounting Department meets each Monday at 10am.");
	  }

	  generateReports(): void {
	    console.log("Generating accounting reports...");
	  }
	}

	let department: Department;
	// department = new Department();

	department = new AccountingDepartment();
	department.printName();
	department.printMeeting();
	// department.generateReports();



	// Advanced Techniques
	// Constructor functions
	class Greeter2 {
		greeting: string;

		constructor(message: string) {
			this.greeting = message;
		}

		greet() {
			return "Hello, " + this.greeting;
		}

	}

	let greeter2: Greeter2 = new Greeter2("world");
	console.log(greeter.greet());


	class Greeter3 {
	  static standardGreeting = "Hello, there";
	  greeting: string;
	  greet() {
	    if (this.greeting) {
	      return "Helloha, " + this.greeting;
	    } else {
	      return Greeter3.standardGreeting;
	    }
	  }
	}

	let greeter3: Greeter3;
	greeter3 = new Greeter3();
	console.log(greeter3.greet()); // "Hello, there"

	let greeterMaker: typeof Greeter3 = Greeter3;
	greeterMaker.standardGreeting = "Hey there!";

	let greeter4: Greeter3 = new greeterMaker();
	console.log(greeter4.greet()); // "Hey there!"

	let greeter5: Greeter3;
	greeter5 = new Greeter3();
	console.log(greeter5.greet()); // "Hey there!"


	// Using a class as an interface
	class Point {
	  x: number;
	  y: number;
	}

	interface Point3d extends Point {
	  z: number;
	}

	let point3d: Point3d = { x: 1, y: 2, z: 3 };
	console.log(point3d);







}


