

namespace demo_01_01 {

	// Type Guards and Differentiating Types
	/*let pet = getSmallPet();

	if ("swim" in pet) {
	  pet.swim();
	}

	if (pet.fly) {
	  pet.fly();
	}


	let pet2 = getSmallPet();
	let fishPet = pet2 as Fish;
	let birdPet = pet2 as Bird;

	if (fishPet.swim) {
	  fishPet.swim();
	} else if (birdPet.fly) {
	  birdPet.fly();
	}*/



	// User-Defined Type Guards
	function isFish(pet: Fish | Bird): pet is Fish {
	  return (pet as Fish).swim !== undefined;
	}

	let pet = getSmallPet();

	if (isFish(pet)) {
	  pet.swim();
	} else {
	  pet.fly();
	}


	const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
	const underWater1: Fish[] = zoo.filter(isFish);

	const underWater2: Fish[] = zoo.filter<Fish>(isFish);
	const underWater3: Fish[] = zoo.filter<Fish>(pet => isFish(pet));


	function move(pet: Fish | Bird) {
	  if ("swim" in pet) {
	    return pet.swim();
	  }
	  return pet.fly();
	}



	// typeof type guards
	function isNumber(x: any): x is number {
	  return typeof x === "number";
	}

	function isString(x: any): x is string {
	  return typeof x === "string";
	}

	function padLeft(value: string, padding: string | number) {
	  if (isNumber(padding)) {
	    return Array(padding + 1).join(" ") + value;
	  }
	  if (isString(padding)) {
	    return padding + value;
	  }
	  throw new Error(`Expected string or number, got '${padding}'.`);
	}


	function padLeft(value: string, padding: string | number) {
	  if (typeof padding === "number") {
	    return Array(padding + 1).join(" ") + value;
	  }
	  if (typeof padding === "string") {
	    return padding + value;
	  }
	  throw new Error(`Expected string or number, got '${padding}'.`);
	}



	// instanceof type guards
	interface Padder {
	  getPaddingString(): string;
	}

	class SpaceRepeatingPadder implements Padder {
	  constructor(private numSpaces: number) {}
	  getPaddingString() {
	    return Array(this.numSpaces + 1).join(" ");
	  }
	}

	class StringPadder implements Padder {
	  constructor(private value: string) {}
	  getPaddingString() {
	    return this.value;
	  }
	}

	function getRandomPadder() {
	  return Math.random() < 0.5
	    ? new SpaceRepeatingPadder(4)
	    : new StringPadder("  ");
	}

	let padder: Padder = getRandomPadder();
	//       ^ = let padder: Padder

	if (padder instanceof SpaceRepeatingPadder) {
	  padder;
	//       ^ = Could not get LSP result: er;>
	//       <  /
	}
	if (padder instanceof StringPadder) {
	  padder;
	//       ^ = Could not get LSP result: er;>
	//       <  /
	}



	// Nullable types
	let exampleString = "foo";
	exampleString = null;

	let stringOrNull: string | null = "bar";
	stringOrNull = null;

	stringOrNull = undefined;


	function f(x: number, y?: number) {
	  return x + (y ?? 0);
	}

	f(1, 2);
	f(1);
	f(1, undefined);
	f(1, null);


	class C {
	  a: number;
	  b?: number;
	}

	let c = new C();

	c.a = 12;
	c.a = undefined;

	c.b = 13;
	c.b = undefined;
	c.b = null;


	function f(stringOrNull: string | null): string {
	  if (stringOrNull === null) {
	    return "default";
	  } else {
	    return stringOrNull;
	  }
	}


	function f(stringOrNull: string | null): string {
	  return stringOrNull ?? "default";
	}


	interface UserAccount {
	  id: number;
	  email?: string;
	}

	const user = getUser("admin");
	user.id;

	if (user) {
	  user.email.length;
	}

	user!.email!.length;


	
	// Type Aliases
	type Second = number;

	let timeInSecond: number = 10;
	let time: Second = 10;


	type Container<T> = { value: T };

	type Tree<T> = {
	  value: T;
	  left?: Tree<T>;
	  right?: Tree<T>;
	};

	type LinkedList<Type> = Type & { next: LinkedList<Type> };

	interface Person {
	  name: string;
	}

	let people = getDriversLicenseQueue();
	people.name;
	people.next.name;
	people.next.next.name;
	people.next.next.next.name;



	// Interfaces vs. Type Aliases
	

	// Enum Member Types
	// Polymorphic this types
	class BasicCalculator {
	  public constructor(protected value: number = 0) {}
	  public currentValue(): number {
	    return this.value;
	  }
	  public add(operand: number): this {
	    this.value += operand;
	    return this;
	  }
	  public multiply(operand: number): this {
	    this.value *= operand;
	    return this;
	  }
	  // ... other operations go here ...
	}

	let v = new BasicCalculator(2).multiply(5).add(1).currentValue();
	


}


