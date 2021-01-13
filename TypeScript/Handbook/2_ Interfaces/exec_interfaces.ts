

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

	

	// Function Types




	// Indexable Types





	// Class Types





	// Extending Interfaces






	// Hybrid Types





	// Interfaces Extending Classes



}


