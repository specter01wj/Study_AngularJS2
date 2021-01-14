

namespace demo_03_01 {

	// Functions
	function add(x, y) {
		return x + y;
	}
	console.log(add(5, 7));

	let myAdd = function(x, y) {
		return x + y;
	}
	console.log(myAdd(10, 20));

	let z = 100;
	function addToZ(x, y) {
	  return x + y + z;
	}
	console.log(addToZ(2, 4));



	// Typing the function
	function add2(x: number, y: number): number {
		return x + y;
	}
	console.log(add(12, 23));

	let myAdd2 = function(x: number, y: number): number {
		return x + y;
	}
	console.log(myAdd(20, 30));



	// Writing the function type
	let myAdd3: (x: number, y: number) => number = function (
	  x: number,
	  y: number
	): number {
	  return x + y;
	};
	console.log(myAdd(200, 300));

	let myAdd4: (baseValue: number, increment: number) => number = function (
	  x: number,
	  y: number
	): number {
	  return x + y;
	};
	console.log(myAdd(100, 200));

	

	// Inferring the types






	// Optional and Default Parameters





	// Rest Parameters






	// this and arrow functions






	// this parameters






	// Overloads




	



}


