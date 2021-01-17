

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



	// Union enums and enum member types






	// Enums at runtime






	// Enums at compile time





	// Ambient enums




}


