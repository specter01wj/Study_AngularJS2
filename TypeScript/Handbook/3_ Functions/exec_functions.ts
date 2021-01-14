

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
	let myAdd5 = function (x: number, y: number): number {
	  return x + y;
	};

	let myAdd6: (baseValue: number, increment: number) => number = function (x, y) {
	  return x + y;
	};



	// Optional and Default Parameters
	function buildName(firstName: string, lastName: string) {
		return firstName + ' ' + lastName;
	}

	// let result1 = buildName('Bob');
	// let result2 = buildName("Bob", "Adams", "Sr.");
	let result3 = buildName("Bob", "Adams");
	console.log(result3);

	function buildName2(firstName: string, lastName?: string) {
	  if (lastName) return firstName + " " + lastName;
	  else return firstName;
	}

	let result4 = buildName2("Bob");
	// let result5 = buildName("Bob", "Adams", "Sr.");
	let result6 = buildName2("Bob", "Adams");
	console.log(result4);

	function buildName3(firstName: string, lastName = "Smith") {
	  return firstName + " " + lastName;
	}

	let result7 = buildName3("Bob");
	let result8 = buildName3("Bob", undefined);
	// let result9 = buildName3("Bob", "Adams", "Sr.");
	let result10 = buildName3("Bob", "Adams");
	console.log(result8);

	function buildName4(firstName = "Will", lastName: string) {
	  return firstName + " " + lastName;
	}

	// let result11 = buildName4("Bob");
	// let result12 = buildName4("Bob", "Adams", "Sr.");
	let result13 = buildName4("Bob", "Adams");
	let result14 = buildName4(undefined, "Adams");
	console.log(result14);



	// Rest Parameters
	function buildName5(firstName: string, ...restOfName: string[]) {
		return firstName + ' ' + restOfName.join(' ');
	}

	let employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");
	console.log(employeeName);

	function buildName6(firstName: string, ...restOfName: string[]) {
	  return firstName + " " + restOfName.join(" ");
	}

	let buildNameFun: (fname: string, ...rest: string[]) => string = buildName6;
	console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));


	// this and arrow functions






	// this parameters






	// Overloads




	



}


