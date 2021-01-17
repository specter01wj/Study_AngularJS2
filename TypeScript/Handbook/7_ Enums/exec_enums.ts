

namespace demo_07_01 {

	// Numeric enums
	enum Direction {
		Up = 1,
		Down,
		Left,
		Right,
	}


	enum UserResponse {
		No = 0,
		Yes = 1,
	}

	function respond(recipient: string, message: UserResponse): void {
	  // ...
	}

	respond("Princess Caroline", UserResponse.Yes);


	enum E {
	  A = getSomeValue(),
	  B = getSomeValue(),
	}

	function getSomeValue(): number {return 100;};



	// String enums
	enum Direction2 {
	  Up = "UP",
	  Down = "DOWN",
	  Left = "LEFT",
	  Right = "RIGHT",
	}



	// Heterogeneous enums
	enum BooleanLikeHeterogeneousEnum {
	  No = 0,
	  Yes = "YES",
	}



	// Computed and constant members
	enum E {
		X,
	}

	enum E1 {
		X,
		Y,
		Z,
	}

	enum E2 {
		A = 1,
		B,
		C,
	}


	enum FileAccess {
	  None,
	  Read = 1 << 1,
	  Write = 1 << 2,
	  ReadWrite = Read | Write,
	  G = "123".length,
	}



	// Union enums and enum member types
	enum ShapeKind {
	  Circle,
	  Square,
	}

	interface Circle {
	  kind: ShapeKind.Circle;
	  radius: number;
	}

	interface Square {
	  kind: ShapeKind.Square;
	  sideLength: number;
	}

	let c: Circle = {
	  // kind: ShapeKind.Square,
	  kind: ShapeKind.Circle,
	  radius: 100,
	};
	console.log(c);


	enum E2 {
	  Foo,
	  Bar,
	}

	function f(x: E2) {
	  // if (x !== E2.Foo || x !== E2.Bar) {
	  if (x !== E2.Foo && x !== E2.Bar) {
	  }
	}


	// Enums at runtime
	enum E3 {
	  X,
	  Y,
	  Z,
	}

	function f3(obj: { X: number }) {
	  return obj.X;
	}

	console.log(f3(E3));



	// Enums at compile time
	enum LogLevel {
	  ERROR,
	  WARN,
	  INFO,
	  DEBUG,
	}
	
	type LogLevelStrings = keyof typeof LogLevel;

	function printImportant(key: LogLevelStrings, message: string) {
	  const num = LogLevel[key];
	  if (num <= LogLevel.WARN) {
	    console.log("Log level key is:", key);
	    console.log("Log level value is:", num);
	    console.log("Log level message is:", message);
	  }
	}
	printImportant("ERROR", "This is a message");
	printImportant("WARN", "This is a message");
	printImportant("DEBUG", "This is a message");




	// Ambient enums




}


