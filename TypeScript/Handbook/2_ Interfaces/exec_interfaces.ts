

namespace demo_02_01 {

	// Our First Interface
	function printLabel(labeledObj: { label: string }) {
	  console.log(labeledObj.label);
	}

	let myObj = { size: 10, label: "Size 10 Object" };
	printLabel(myObj);


	interface LabeledValue {
	  label: string;
	}

	function printLabel2(labeledObj: LabeledValue) {
	  console.log(labeledObj.label);
	}

	let myObj2 = { size: 10, label: "Size 10 Object 222" };
	printLabel(myObj2);



	// Optional Properties
	interface SquareConfig {
		color?: string;
		width?: number;
	}

	function createSquare(config: SquareConfig): {color: string; area: number} {
		let newSquare = { color: 'white', area: 100 };

		if (config.color) {
	    newSquare.color = config.color;
	  }
	  if (config.width) {
	    newSquare.area = config.width * config.width;
	  }

		return newSquare;
	}

	let mySquare1 = createSquare({ color: 'Black' });
	console.log(mySquare1);



	// Readonly properties
	interface Point {
		readonly x: number;
		readonly y: number;
	}

	let p1: Point = { x: 10, y: 20};
	// p1.x = 5;

	let a: number[] = [1, 2, 3, 4];
	let ro: ReadonlyArray<number> = a;

	// ro[0] = 12;
	// ro.push(5);
	// ro.length = 100;
	// a = ro;
	a = ro as number[];



	// Excess Property Checks
	interface SquareConfig2 {
	  color?: string;
	  width?: number;
	}

	function createSquare2(config: SquareConfig2): { color: string; area: number } {
	  return {
	    color: config.color || "red",
	    area: config.width ? config.width * config.width : 20,
	  };
	}

	let mySquare2 = createSquare2({ color: "blue", width: 100 });
	console.log(mySquare2);

	let mySquare3 = createSquare2({ width: 200, opacity: 0.5 } as SquareConfig2);
	console.log(mySquare3);

	interface SquareConfig3 {
	  color?: string;
	  width?: number;
	  [propName: string]: any;
	}

	let squareOptions = { colour: "purple", width: 300 };
	let mySquare4 = createSquare2(squareOptions);
	console.log(mySquare4);

	// let squareOptions = { colour: "red" };
	// let mySquare = createSquare(squareOptions);



	// Function Types
	interface SearchFunc {
	  (source: string, subString: string): boolean;
	}

	let mySearch: SearchFunc;

	mySearch = function(source: string, subString: string) {
		let result = source.search(subString);
		return result > -1;
	}
	console.log(mySearch('abcdefg', 'de'));


	let mySearch2: SearchFunc;

	mySearch2 = function (src: string, sub: string): boolean {
	  let result = src.search(sub);
	  return result > -1;
	};


	let mySearch3: SearchFunc;

	mySearch3 = function (src, sub) {
	  let result = src.search(sub);
	  return result > -1;
	};


	// let mySearch4: SearchFunc;

	// mySearch4 = function (src, sub) {
	//   let result = src.search(sub);
	//   return "string";
	// };



	// Indexable Types
	interface StringArray {
	  [index: number]: string;
	}

	let myArray: StringArray;
	myArray = ["Bob", "Fred"];

	let myStr1: string = myArray[0];
	console.log(myStr1);


	interface Animal {
	  name: string;
	}

	interface Dog extends Animal {
	  breed: string;
	}

	interface NotOkay {
	  // [x: number]: Animal;
	  [x: string]: Animal;
	  // [y: string]: Dog;
	  x_name: Animal;
	}

	interface NumberDictionary {
	  [index: string]: number;
	  length: number;
	  // name: string;
	  name: number;
	}

	interface NumberOrStringDictionary {
	  [index: string]: number | string;
	  length: number; // ok, length is a number
	  name: string; // ok, name is a string
	}


	interface ReadonlyStringArray {
	  readonly [index: number]: string;
	}

	let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
	// myArray2[2] = "Mallory"; 



	// Class Types
	interface ClockInterface {
		currentTime: Date;
	}

	class Clock implements ClockInterface {
		currentTime: Date = new Date();

		constructor(h: number, m: number) {}
	}


	interface ClockInterface2 {
	  currentTime: Date;
	  setTime(d: Date): void;
	}

	class Clock2 implements ClockInterface2 {
	  currentTime: Date = new Date();
	  setTime(d: Date) {
	    this.currentTime = d;
	  }
	  constructor(h: number, m: number) {}
	}


	/*interface ClockConstructor {
	  new (hour: number, minute: number);
	}

	class Clock implements ClockConstructor {
		currentTime: Date;
	  constructor(h: number, m: number) {}
	}*/


	interface ClockConstructor {
	  new (hour: number, minute: number): ClockInterface3;
	}

	interface ClockInterface3 {
	  tick(): void;
	}

	function createClock(
	  ctor: ClockConstructor,
	  hour: number,
	  minute: number
	): ClockInterface3 {
	  return new ctor(hour, minute);
	}

	class DigitalClock implements ClockInterface3 {
	  constructor(h: number, m: number) {}
	  tick() {
	    console.log("beep beep");
	  }
	}

	class AnalogClock implements ClockInterface3 {
	  constructor(h: number, m: number) {}
	  tick() {
	    console.log("tick tock");
	  }
	}

	let digital = createClock(DigitalClock, 12, 17);
	let analog = createClock(AnalogClock, 7, 32);
	console.log(digital.tick());
	console.log(analog.tick());


	interface ClockConstructor4 {
	  new (hour: number, minute: number): ClockInterface4;
	}

	interface ClockInterface4 {
	  tick(): void;
	}

	const Clock4: ClockConstructor4 = class Clock4 implements ClockInterface4 {
	  constructor(h: number, m: number) {}
	  tick() {
	    console.log("beep beep! clock4");
	  }
	};

	let clock4 = new Clock4(12, 17);
	clock4.tick();



	// Extending Interfaces
	interface Shape {
		color: string;
	}

	interface Square extends Shape {
		sideLength: number;
	}

	let square = {} as Square;
	square.color = 'blue';
	square.sideLength = 10;
	console.log(square);


	interface Shape2 {
	  color: string;
	}

	interface PenStroke2 {
	  penWidth: number;
	}

	interface Square2 extends Shape2, PenStroke2 {
	  sideLength: number;
	}

	let square2 = {} as Square2;
	square2.color = "blue";
	square2.sideLength = 10;
	square2.penWidth = 5.0;
	console.log(square2);



	// Hybrid Types
	interface Counter {
	  (start: number): string;
	  interval: number;
	  reset(): void;
	}

	function getCounter(): Counter {
	  let counter = function (start: number) {} as Counter;
	  counter.interval = 123;
	  counter.reset = function () {};
	  return counter;
	}

	let c = getCounter();
	c(10);
	c.reset();
	c.interval = 5.0;
	console.log(c);



	// Interfaces Extending Classes



}


