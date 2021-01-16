

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




	// Computed and constant members




	// Union enums and enum member types






	// Enums at runtime






	// Enums at compile time





	// Ambient enums




}


