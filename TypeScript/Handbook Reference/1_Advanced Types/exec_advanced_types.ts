

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
	

	class ScientificCalculator extends BasicCalculator {
	  public constructor(value = 0) {
	    super(value);
	  }
	  public sin() {
	    this.value = Math.sin(this.value);
	    return this;
	  }
	  // ... other operations go here ...
	}

	let v2 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();Try



	// Index types
	function pluck_1(o, propertyNames) {
	  return propertyNames.map((n) => o[n]);
	}


	function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
	  return propertyNames.map((n) => o[n]);
	}

	interface Car {
	  manufacturer: string;
	  model: string;
	  year: number;
	}

	let taxi: Car = {
	  manufacturer: "Toyota",
	  model: "Camry",
	  year: 2014,
	};

	let makeAndModel: string[] = pluck(taxi, ["manufacturer", "model"]);

	let modelYear = pluck(taxi, ["model", "year"]);



	// Index types and index signatures
	interface Dictionary<T> {
	  [key: string]: T;
	}
	let keys: keyof Dictionary<number>;
	let value: Dictionary<number>["foo"];



	interface Dictionary2<T> {
	  [key: number]: T;
	}

	let keys2: keyof Dictionary2<number>;
	let numberValue: Dictionary2<number>[42];
	// let value: Dictionary2<number>["foo"];



	// Mapped types
	interface PersonSubset {
	  name?: string;
	  age?: number;
	}

	interface PersonReadonly {
	  readonly name: string;
	  readonly age: number;
	}


	type Partial<T> = {
	  [P in keyof T]?: T[P];
	};

	type Readonly<T> = {
	  readonly [P in keyof T]: T[P];
	};


	type PersonPartial = Partial<Person>;
	type ReadonlyPerson = Readonly<Person>;


	type PartialWithNewMember<T> = {
	  [P in keyof T]?: T[P];
	} & { newMember: boolean };

	/*type WrongPartialWithNewMember<T> = {
	  [P in keyof T]?: T[P];
	  newMember: boolean; }*/


	type Flags = {
	  option1: boolean;
	  option2: boolean;
	};


	type NullablePerson = { [P in keyof Person]: Person[P] | null };
	type PartialPerson = { [P in keyof Person]?: Person[P] };


	type Nullable<T> = { [P in keyof T]: T[P] | null };
	type Partial<T> = { [P in keyof T]?: T[P] };


	type Proxy<T> = {
	  get(): T;
	  set(value: T): void;
	};

	type Proxify<T> = {
	  [P in keyof T]: Proxy<T[P]>;
	};

	function proxify<T>(o: T): Proxify<T> {
	  // ... wrap proxies ...
	}

	let props = { rooms: 4 };
	let proxyProps = proxify(props);


	type Pick<T, K extends keyof T> = {
	  [P in K]: T[P];
	};

	type Record<K extends keyof any, T> = {
	  [P in K]: T;
	};



	// Inference from mapped types
	function unproxify<T>(t: Proxify<T>): T {
	  let result = {} as T;
	  for (const k in t) {
	    result[k] = t[k].get();
	  }
	  return result;
	}

	let originalProps = unproxify(proxyProps);



	// Conditional Types
	declare function f<T extends boolean>(x: T): T extends true ? string : number;

	let x = f(Math.random() < 0.5);


	type TypeName<T> = T extends string
	  ? "string"
	  : T extends number
	  ? "number"
	  : T extends boolean
	  ? "boolean"
	  : T extends undefined
	  ? "undefined"
	  : T extends Function
	  ? "function"
	  : "object";

	type T0 = TypeName<string>;
	//   ^ = type T0 = "string"
	type T1 = TypeName<"a">;
	//   ^ = type T1 = "string"
	type T2 = TypeName<true>;
	//   ^ = type T2 = "boolean"
	type T3 = TypeName<() => void>;
	//   ^ = type T3 = "function"
	type T4 = TypeName<string[]>;
	//   ^ = type T4 = "object"


	interface Foo {
	  propA: boolean;
	  propB: boolean;
	}

	declare function f<T>(x: T): T extends Foo ? string : number;

	function foo<U>(x: U) {
	  let a = f(x);
	  let b: string | number = a;
	}



	// Distributive conditional types
	type T5 = TypeName<string | (() => void)>;
	//   ^ = type T5 = "string" | "function"
	type T6 = TypeName<string | string[] | undefined>;
	//   ^ = type T6 = "string" | "undefined" | "object"
	type T7 = TypeName<string[] | number[]>;
	//   ^ = type T7 = "object"


	





}


