var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var demo_06_01;
(function (demo_06_01) {
    var _name;
    // Classes
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return 'Hello, ' + this.greeting;
        }
    }
    let greeter = new Greeter('world');
    console.log(greeter.greet());
    // Inheritance
    class Animal {
        move(distanceInMeters = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }
    class Dog extends Animal {
        bark() {
            console.log("Woof! Woof!");
        }
    }
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
    class Animal2 {
        constructor(theName) {
            this.name = theName;
        }
        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    class Snake extends Animal2 {
        constructor(name) {
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }
    class Horse extends Animal2 {
        constructor(name) {
            super(name);
        }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    let sam = new Snake("Sammy the Python");
    let tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
    // Public by default
    class Animal3 {
        constructor(theName) {
            this.name = theName;
        }
        move(distanceInMeters) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    // ECMAScript Private Fields
    class Animal4 {
        constructor(theName) {
            _name.set(this, void 0); // private
            __classPrivateFieldSet(this, _name, theName);
        }
    }
    _name = new WeakMap();
    // new Animal4("Cat").#name;
    // Understanding TypeScript’s private
    class Animal5 {
        constructor(theName) {
            this.name = theName;
        }
    }
    // new Animal5("Cat").name;
    class Animal6 {
        constructor(theName) {
            this.name = theName;
        }
    }
    class Rhino extends Animal6 {
        constructor() {
            super("Rhino");
        }
    }
    class Employee {
        constructor(theName) {
            this.name = theName;
        }
    }
    let animal = new Animal6("Goat");
    console.log(animal);
    let rhino = new Rhino();
    let employee = new Employee("Bob");
    animal = rhino;
    console.log(animal);
    // animal = employee;
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
