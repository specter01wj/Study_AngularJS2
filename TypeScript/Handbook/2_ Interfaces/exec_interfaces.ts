

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
		let newSquare = { color: 'white'; area: 100 };

		if (config.color) {
	    newSquare.color = config.color;
	  }
	  if (config.width) {
	    newSquare.area = config.width * config.width;
	  }

		return newSquare;
	}



	// Readonly properties




	// Excess Property Checks




	// Function Types




	// Indexable Types





	// Class Types





	// Extending Interfaces






	// Hybrid Types





	// Interfaces Extending Classes



}


