var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var demo_06_01;
(function (demo_06_01) {
    // Classes
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return 'Hello, ' + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('world');
    console.log(greeter.greet());
    // Inheritance
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log("Animal moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            console.log("Woof! Woof!");
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
    var Animal2 = /** @class */ (function () {
        function Animal2(theName) {
            this.name = theName;
        }
        Animal2.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal2;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal2));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal2));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
    // Public by default
    // ECMAScript Private Fields
    // Understanding TypeScript’s private
    // Understanding protected
    // Readonly modifier
    // Parameter properties
    // Accessors
    // Static Properties
    // Abstract Classes
    // Advanced Techniques
    // Constructor functions
    // Using a class as an interface
})(demo_06_01 || (demo_06_01 = {}));
