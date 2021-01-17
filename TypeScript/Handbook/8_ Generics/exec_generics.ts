

namespace demo_08_01 {

	// Hello World of Generics
	function identity<T>(arg: T): T {
		return arg;
	}

	let output1 = identity<string>('myString1');
	console.log(output1);
	let output2 = identity('myString2');
	console.log(output2);



	// Working with Generic Type Variables
	function loggingIdentity<T>(arg: T[]): T[] {
	  console.log(arg.length);
	  return arg;
	}

	let output3 = loggingIdentity(['myStr1', 'myStr2']);
	console.log(output3);


	function loggingIdentity2<T>(arg: Array<T>): Array<T> {
	  console.log(arg.length);
	  return arg;
	}



	// Generic Types
	function identity2<T>(arg: T): T {
	  return arg;
	}

	let myIdentity: <T>(arg: T) => T = identity2;

	let myIdentity2: <U>(arg: U) => U = identity2;


	// Generic Classes




	// Generic Constraints





	// Using Type Parameters in Generic Constraints






	// Using Class Types in Generics







}


