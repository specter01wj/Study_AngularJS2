

namespace demo_05_01 {

	// Union Types
	function padLeft(value: string, padding: any) {
	  if (typeof padding === "number") {
	    // return Array(padding + 1).join(" ") + value;
	    return (padding + 1) + ' ' + value;
	  }
	  if (typeof padding === "string") {
	    return padding + value;
	  }
	  throw new Error(`Expected string or number, got '${typeof padding}'.`);
	}

	let res1 = padLeft("Hello world", 4);
	let res2 = padLeft("Hello world", "Red");
	console.log(res1);
	console.log(res2);

	// let indentedString = padLeft("Hello world", true);
	// console.log(indentedString);

	function padLeft2(value: string, padding: string | number) {
	  if (typeof padding === "number") {
	    return Array(padding + 1).join(" ") + value;
	  }
	  if (typeof padding === "string") {
	    return padding + value;
	  }
	  throw new Error(`Expected string or number, got '${typeof padding}'.`);
	}

	// let indentedString2 = padLeft2("Hello world", true);



	// Unions with Common Fields
	interface Bird {
	  fly(): void;
	  layEggs(): void;
	}

	interface Fish {
	  swim(): void;
	  layEggs(): void;
	}

	// declare function getSmallPet(): Fish | Bird;

	// let pet = getSmallPet();
	// pet.layEggs();
	// pet.swim();



	// Discriminating Unions
	type NetworkLoadingState = {
	  state: "loading";
	};

	type NetworkFailedState = {
	  state: "failed";
	  code: number;
	};

	type NetworkSuccessState = {
	  state: "success";
	  response: {
	    title: string;
	    duration: number;
	    summary: string;
	  };
	};

	type NetworkState =
	  | NetworkLoadingState
	  | NetworkFailedState
	  | NetworkSuccessState;


	function logger(state: NetworkState): string {
		// state.code;

		switch (state.state) {
	    case "loading":
	      return "Downloading...";
	    case "failed":
	      return `Error ${state.code} downloading`;
	    case "success":
	      // return `Downloaded ${state.response.title} - ${state.response.summary}`;
	      return `Downloaded ${state.response.title} - ${state.response.summary} - time: ${state.response.duration}`;
	  }
	}

	let net1: NetworkSuccessState = {
		state: "success",
	  response: {
	    title: 'ED-01',
	    duration: 24,
	    summary: 'success-101'
	  }
	};

	console.log(logger(net1));

	// Union Exhaustiveness checking






	// Intersection Types



	




}


