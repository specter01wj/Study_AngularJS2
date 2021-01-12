

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
	  console.log(x[0].substring(1));



	  // Enum
	  enum Color {
	  	Red, Green, Blue
	  }
	  let c: Color = Color.Blue;
	  console.log(c);

	  enum Color_2 {
	  	Red = 1, Green, Blue
	  }
	  let c2: Color_2 = Color_2.Blue;
	  console.log(c2);

	  enum Color_3 {
	  	Red = 5, Green = 2, Blue = 22
	  }
	  let c3: Color_3 = Color_3.Blue;
	  console.log(c3);

	  let colorName: string = Color[2];
	  console.log(colorName);



	  // Unknown
	  let notSure: unknown = 4;
	  notSure = "maybe a string instead";
	  console.log(notSure);
	  notSure = false;
	  console.log(notSure);

	  //declare const maybe: unknown;
	  let maybe: unknown;
	  // const aNumber: number = maybe;
	  if (maybe === true) {
		  const aBoolean: boolean = maybe;
		  // const aString: string = maybe;
		}

		if (typeof maybe === "string") {
		  const aString: string = maybe;
		  // const aBoolean: boolean = maybe;
		}



		// Any
		//declare function getValue(key: string): any;
		function getValue(key: string): any {
			return key;
		};
		const str: string = getValue('myString');
		console.log(str);

		let looselyTyped: any = 4;
		// looselyTyped.ifItExists();
		looselyTyped.toFixed();

		let strictlyTyped: unknown = 4;
		// strictlyTyped.toFixed();

		let looselyTyped2: any = {};
		// let d = looselyTyped2.a.b.c.d;
		// console.log(d);



		// Void
		function warnUser(): void {
		  console.log("This is my warning message");
		}

		let unusable: void = undefined;
		unusable = null;
		console.log(unusable);



		// Null and Undefined
		let u: undefined = undefined;
		let n: null = null;
		let n2: object = null;



		// Never
		function error(message: string): never {
		  throw new Error(message);
		}

		function fail() {
		  return error("Something failed");
		}

		function infiniteLoop(): never {
		  while (true) {}
		}

		

		// Object








		// Type assertions




}


