var demo_03_01;
(function (demo_03_01) {
    // Functions
    function add(x, y) {
        return x + y;
    }
    console.log(add(5, 7));
    var myAdd = function (x, y) {
        return x + y;
    };
    console.log(myAdd(10, 20));
    var z = 100;
    function addToZ(x, y) {
        return x + y + z;
    }
    console.log(addToZ(2, 4));
    // Typing the function
    function add2(x, y) {
        return x + y;
    }
    console.log(add(12, 23));
    var myAdd2 = function (x, y) {
        return x + y;
    };
    console.log(myAdd(20, 30));
    // Writing the function type
    var myAdd3 = function (x, y) {
        return x + y;
    };
    console.log(myAdd(200, 300));
    var myAdd4 = function (x, y) {
        return x + y;
    };
    console.log(myAdd(100, 200));
    // Inferring the types
    var myAdd5 = function (x, y) {
        return x + y;
    };
    var myAdd6 = function (x, y) {
        return x + y;
    };
    // Optional and Default Parameters
    function buildName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
    // let result1 = buildName('Bob');
    // let result2 = buildName("Bob", "Adams", "Sr.");
    var result3 = buildName("Bob", "Adams");
    console.log(result3);
    function buildName2(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    var result4 = buildName2("Bob");
    // let result5 = buildName("Bob", "Adams", "Sr.");
    var result6 = buildName2("Bob", "Adams");
    console.log(result4);
    function buildName3(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
        return firstName + " " + lastName;
    }
    var result7 = buildName3("Bob");
    var result8 = buildName3("Bob", undefined);
    // let result9 = buildName3("Bob", "Adams", "Sr.");
    var result10 = buildName3("Bob", "Adams");
    console.log(result8);
    function buildName4(firstName, lastName) {
        if (firstName === void 0) { firstName = "Will"; }
        return firstName + " " + lastName;
    }
    // let result11 = buildName4("Bob");
    // let result12 = buildName4("Bob", "Adams", "Sr.");
    var result13 = buildName4("Bob", "Adams");
    var result14 = buildName4(undefined, "Adams");
    console.log(result14);
    // Rest Parameters
    function buildName5(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + ' ' + restOfName.join(' ');
    }
    var employeeName = buildName5("Joseph", "Samuel", "Lucas", "MacKinzie");
    console.log(employeeName);
    function buildName6(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var buildNameFun = buildName6;
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
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
    var deck2 = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker2 = deck2.createCardPicker();
    var pickedCard2 = cardPicker2();
    console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
    /*class Handler {
      info: string;
      onClickBad(this: Handler, e: Event) {
        this.info = e.message;
      }
    }

    let h = new Handler();
    uiElement.addClickListener(h.onClickBad);*/
    var Handler = /** @class */ (function () {
        function Handler() {
        }
        Handler.prototype.onClickGood = function (e) {
            console.log("clicked!");
        };
        return Handler;
    }());
    var h = new Handler();
    // uiElement.addClickListener(h.onClickGood);
    console.log(h.onClickGood);
    /*class Handler {
      info: string;
      onClickGood = (e: Event) => {
        this.info = e.message;
      };
    }*/
    // Overloads
    var suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        if (typeof x == "object") {
            var pickedCard_1 = Math.floor(Math.random() * x.length);
            return pickedCard_1;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    var myDeck = [
        { suit: "diamonds", card: 2 },
        { suit: "spades", card: 10 },
        { suit: "hearts", card: 4 },
    ];
    var pickedCard3 = myDeck[pickCard(myDeck)];
    console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);
    var pickedCard4 = pickCard(15);
    console.log("card: " + pickedCard4.card + " of " + pickedCard4.suit);
    var suits2 = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard2(x) {
        if (typeof x == "object") {
            var pickedCard_2 = Math.floor(Math.random() * x.length);
            return pickedCard_2;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
    var myDeck2 = [
        { suit: "diamonds", card: 2 },
        { suit: "spades", card: 10 },
        { suit: "hearts", card: 4 },
    ];
    var pickedCard5 = myDeck[pickCard2(myDeck)];
    console.log("card: " + pickedCard5.card + " of " + pickedCard5.suit);
    var pickedCard6 = pickCard2(15);
    console.log("card: " + pickedCard6.card + " of " + pickedCard6.suit);
})(demo_03_01 || (demo_03_01 = {}));
