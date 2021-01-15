

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





	// Discriminating Unions






	// Union Exhaustiveness checking






	// Intersection Types



	




}


