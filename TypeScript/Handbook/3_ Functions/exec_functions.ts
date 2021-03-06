﻿

namespace demo_03_01 {

	// Functions
	function add(x, y) {
		return x + y;
	}
	console.log(add(5, 7));

	let myAdd = function(x, y) {
		return x + y;
	}
	console.log(myAdd(10, 20));

	let z = 100;
	function addToZ(x, y) {
	  return x + y + z;
	}
	console.log(addToZ(2, 4));



	// Typing the function
	function add2(x: number, y: number): number {
		return x + y;
	}
	console.log(add(12, 23));

	let myAdd2 = function(x: number, y: number): number {
		return x + y;
	}
	console.log(myAdd(20, 30));



	// Writing the function type
	let myAdd3: (x: number, y: number) => number = function (
	  x: number,
	  y: number
	): number {
	  return x + y;
	};
	console.log(myAdd(200, 300));

	let myAdd4: (baseValue: number, increment: number) => number = function (
	  x: number,
	  y: number
	): number {
	  return x + y;
	};
	console.log(myAdd(100, 200));



	// Inferring the types
	let myAdd5 = function (x: number, y: number): number {
	  return x + y;
	};

	let myAdd6: (baseValue: number, increment: number) => number = function (x, y) {
	  return x + y;
	};



	// Optional and Default Parameters
	function buildName(firstName: string, lastName: string) {
		return firstName + ' ' + lastName;
	}

	// let result1 = buildName('Bob');
	// let result2 = buildName("Bob", "Adams", "Sr.");
	let result3 = buildName("Bob", "Adams");
	console.log(result3);

	function buildName2(firstName: string, lastName?: string) {
	  if (lastName) return firstName + " " + lastName;
	  else return firstName;
	}

	let result4 = buildName2("Bob");
	// let result5 = buildName("Bob", "Adams", "Sr.");
	let result6 = buildName2("Bob", "Adams");
	console.log(result4);

	function buildName3(firstName: string, lastName = "Smith") {
	  return firstName + " " + lastName;
	}

	let result7 = buildName3("Bob");
	let result8 = buildName3("Bob", undefined);
	// let result9 = buildName3("Bob", "Adams", "Sr.");
	let result10 = buildName3("Bob", "Adams");
	console.log(result8);

	function buildName4(firstName = "Will", lastName: string) {
	  return firstName + " " + lastName;
	}

	// let result11 = buildName4("Bob");
	// let result12 = buildName4("Bob", "Adams", "Sr.");
	let result13 = buildName4("Bob", "Adams");
	let result14 = buildName4(undefined, "Adams");
	console.log(result14);



	// Rest Parameters
	function buildName5(firstName: string, ...restOfName: string[]) {
		return firstName + ' ' + restOfName.join(' ');
	}

	let employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");
	console.log(employeeName);

	function buildName6(firstName: string, ...restOfName: string[]) {
	  return firstName + " " + restOfName.join(" ");
	}

	let buildNameFun: (fname: string, ...rest: string[]) => string = buildName6;
	console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));



	// this and arrow functions
	/*let deck = {
	  suits: ["hearts", "spades", "clubs", "diamonds"],
	  cards: Array(52),
	  createCardPicker: function () {
	    return function () {
	      let pickedCard = Math.floor(Math.random() * 52);
	      let pickedSuit = Math.floor(pickedCard / 13);

	      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
	    };
	  },
	};

	let cardPicker = deck.createCardPicker();
	let pickedCard = cardPicker();

	console.log("card: " + pickedCard.card + " of " + pickedCard.suit);*/

	let deck = {
	  suits: ["hearts", "spades", "clubs", "diamonds"],
	  cards: Array(52),
	  createCardPicker: function () {
	    // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
	    return () => {
	      let pickedCard = Math.floor(Math.random() * 52);
	      let pickedSuit = Math.floor(pickedCard / 13);

	      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
	    };
	  },
	};

	let cardPicker = deck.createCardPicker();
	let pickedCard = cardPicker();

	console.log("card: " + pickedCard.card + " of " + pickedCard.suit);



	// this parameters
	interface Card {
	  suit: string;
	  card: number;
	}

	interface Deck {
	  suits: string[];
	  cards: number[];
	  createCardPicker(this: Deck): () => Card;
	}

	let deck2: Deck = {
		suits: ["hearts", "spades", "clubs", "diamonds"],
		cards: Array(52),
		createCardPicker: function(this: Deck) {
			return () => {
				let pickedCard = Math.floor(Math.random() * 52);
      	let pickedSuit = Math.floor(pickedCard / 13);

      	return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
			}
		}
	};

	let cardPicker2 = deck2.createCardPicker();
	let pickedCard2 = cardPicker2();

	console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);



	interface UIElement {
	  addClickListener(onclick: (this: void, e: Event) => void): void;
	}
	/*class Handler {
	  info: string;
	  onClickBad(this: Handler, e: Event) {
	  	this.info = e.message;
	  }
	}

	let h = new Handler();
	uiElement.addClickListener(h.onClickBad);*/


	class Handler {
	  info: string;
	  onClickGood(this: void, e: Event) {
	    console.log("clicked!");
	  }
	}

	let h = new Handler();
	// uiElement.addClickListener(h.onClickGood);
	console.log(h.onClickGood);


	/*class Handler {
	  info: string;
	  onClickGood = (e: Event) => {
	    this.info = e.message;
	  };
	}*/


	// Overloads
	let suits = ["hearts", "spades", "clubs", "diamonds"];

	function pickCard(x: any): any {
	  if (typeof x == "object") {
	    let pickedCard = Math.floor(Math.random() * x.length);
	    return pickedCard;
	  } else if (typeof x == "number") {
	    let pickedSuit = Math.floor(x / 13);
	    return { suit: suits[pickedSuit], card: x % 13 };
	  }
	}

	let myDeck = [
	  { suit: "diamonds", card: 2 },
	  { suit: "spades", card: 10 },
	  { suit: "hearts", card: 4 },
	];

	let pickedCard3 = myDeck[pickCard(myDeck)];
	console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);

	let pickedCard4 = pickCard(15);
	console.log("card: " + pickedCard4.card + " of " + pickedCard4.suit);




	let suits2 = ["hearts", "spades", "clubs", "diamonds"];

	function pickCard2(x: { suit: string; card: number }[]): number;
	function pickCard2(x: number): { suit: string; card: number };
	function pickCard2(x: any): any {
	  if (typeof x == "object") {
	    let pickedCard = Math.floor(Math.random() * x.length);
	    return pickedCard;
	  } else if (typeof x == "number") {
	    let pickedSuit = Math.floor(x / 13);
	    return { suit: suits[pickedSuit], card: x % 13 };
	  }
	}

	let myDeck2 = [
	  { suit: "diamonds", card: 2 },
	  { suit: "spades", card: 10 },
	  { suit: "hearts", card: 4 },
	];

	let pickedCard5 = myDeck[pickCard2(myDeck)];
	console.log("card: " + pickedCard5.card + " of " + pickedCard5.suit);

	let pickedCard6 = pickCard2(15);
	console.log("card: " + pickedCard6.card + " of " + pickedCard6.suit);



}


