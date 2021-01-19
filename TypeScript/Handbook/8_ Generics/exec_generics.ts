

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

	let myIdentity3: { <T>(arg: T): T } = identity2;


	interface GenericIdentityFn {
	  <T>(arg: T): T;
	}

	function identity4<T>(arg: T): T {
	  return arg;
	}

	let myIdentity4: GenericIdentityFn = identity4;
	console.log(myIdentity4('James'));


	interface GenericIdentityFn2<T> {
	  (arg: T): T;
	}

	function identity5<T>(arg: T): T {
	  return arg;
	}

	let myIdentity5: GenericIdentityFn2<number> = identity5;
	console.log(myIdentity5(202));

	let myIdentity6: GenericIdentityFn2<string[]> = identity5;
	console.log(myIdentity6(['Jim', 'King', 'Mike']));



	// Generic Classes
	class GenericNumber<T> {
		zeroValue: T;
		add: (x: T, y: T) => T;
	}

	let myGenericNumber = new GenericNumber<number>();
	myGenericNumber.zeroValue = 0;
	/*myGenericNumber.add = function (x, y) {
	  return x + y;
	};*/
	myGenericNumber.add = (x, y) => {
	  return x + y;
	};
	console.log(myGenericNumber.zeroValue);
	console.log(myGenericNumber.add(8, 10));


	let stringNumeric = new GenericNumber<string>();
	stringNumeric.zeroValue = "V1";
	stringNumeric.add = function (x, y) {
	  return x + y;
	};
	console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));



	// Generic Constraints
	interface Lengthwise {
	  length: number;
	}

	function loggingIdentity3<T extends Lengthwise>(arg: T): T {
	  console.log(arg.length);
	  return arg;
	}

	// let output4 = loggingIdentity3(1001);
	let output4 = loggingIdentity3({length: 100, value: 13});
	console.log(output4);



	// Using Type Parameters in Generic Constraints
	function getProperty<T, K extends keyof T>(obj: T, key: K) {
	  return obj[key];
	}

	let x = { a: 1, b: 2, c: 3, d: 4 };

	console.log(getProperty(x, "a"));
	// getProperty(x, "m");



	// Using Class Types in Generics
	function create<T>(c: { new (): T }): T {
	  return new c();
	}


	class BeeKeeper {
	  hasMask: boolean;
	}

	class ZooKeeper {
	  nametag: string;
	}

	class Animal {
	  numLegs: number;
	}

	class Bee extends Animal {
	  keeper: BeeKeeper;
	}

	class Lion extends Animal {
	  keeper: ZooKeeper;
	}

	function createInstance<A extends Animal>(c: new () => A): A {
	  return new c();
	}

	// createInstance(Lion).keeper.nametag;
	console.log(createInstance(Lion));
	// createInstance(Bee).keeper.hasMask;
	console.log(createInstance(Bee).keeper);




}


