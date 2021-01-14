﻿

namespace demo_03_01 {

	// Literal Narrowing
	const helloWorld = "Hello World";
	let hiWorld = "Hi World";



	// String Literal Types
	type Easing = "ease-in" | "ease-out" | "ease-in-out";

	class UIElement {
	  animate(dx: number, dy: number, easing: Easing) {
	    if (easing === "ease-in") {
	    	console.log('ease-in');
	    } else if (easing === "ease-out") {
	    	console.log('ease-out');
	    } else if (easing === "ease-in-out") {
	    	console.log('ease-in-out');
	    } else {
	      console.log('error!');
	    }
	  }
	}

	let button = new UIElement();
	button.animate(0, 0, "ease-in");
	// button.animate(0, 0, "uneasy");



	// Numeric Literal Types
	function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
	  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
	}

	const result = rollDice();
	console.log(result);

	interface MapConfig {
	  lng: number;
	  lat: number;
	  tileSize: 8 | 16 | 32;
	}

	function setupMap(obj: MapConfig) {};
	setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });



	// Boolean Literal Types
	interface ValidationSuccess {
	  isValid: true;
	  reason: null;
	}

	interface ValidationFailure {
	  isValid: false;
	  reason: string;
	}

	type ValidationResult = ValidationSuccess | ValidationFailure;

	


}


