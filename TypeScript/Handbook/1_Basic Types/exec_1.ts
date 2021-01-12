

namespace demo_01_01 {

	// Boolean
	let isDone: boolean = false;
	console.log(isDone);


	// Number
	let decimal: number = 6;
	let hex: number = 0xf00d;
	let binary: number = 0b1010;
	let octal: number = 0o744;
	// let big: bigint = 100n;
	// console.log(big);
	// -t es2020


	// String
	let color: string = 'blue';
	color = 'red';

	let fullName: string = `Bob Bobbington`;
	let age: number = 37;
	let sentence: string = `Hellow, my name is ${fullName}.

	I'll be ${age + 1} years old next month.`
	console.log(sentence);

	let sentence2: string =
	  "Hello, my name is " +
	  fullName +
	  ".\n\n" +
	  "I'll be " +
	  (age + 1) +
	  " years old next month.";



	  // Array
	  let list: number[] = [1, 2, 3];
	  let list2: Array<number> = [1, 2, 3];



	  // Tuple
	  let x: [string, number];
	  x = ["hello", 10];
	  console.log(x);









}


