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
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee2 extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        get value() {
            return this.department;
        }
        set value(v) {
            this.department = v;
        }
        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let howard = new Employee2("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    console.log(howard.value);
    howard.value = 'Engineer';
    console.log(howard.value);
    // console.log(howard.name);
    class Person2 {
        constructor(theName) {
            this.name = theName;
        }
    }
    // Employee can extend Person
    class Employee3 extends Person2 {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let howard2 = new Employee3("Howard", "Sales");
    // let john = new Person2("John");
    console.log(howard2.getElevatorPitch());
    // Readonly modifier
    class Octopus {
        constructor(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
    }
    let dad = new Octopus("Man with the 8 strong legs");
    console.log(dad.name);
    // dad.name = "Man with the 3-piece suit";
    // Parameter properties
    class Octopus2 {
        constructor(name) {
            this.name = name;
            this.numberOfLegs = 8;
        }
    }
    let dad2 = new Octopus2("Man with the 8 strong legs_2");
    console.log(dad2.name);
    // Accessors
    class Employee4 {
    }
    let employee4 = new Employee4();
    employee4.fullName = "Bob Smith";
    if (employee4.fullName) {
        console.log(employee4.fullName);
    }
    const fullNameMaxLength = 10;
    class Employee5 {
        constructor() {
            this._fullNmae = '';
        }
        get fullName() {
            return this._fullNmae;
        }
        set fullName(newName) {
            if (newName && newName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this._fullNmae = newName;
        }
    }
    let employee5 = new Employee5();
    employee5.fullName = 'James Wang';
    if (employee5.fullName) {
        console.log(employee5.fullName);
    }
    // employee5.fullName = 'Giannis Antetokounmpo';
    // console.log(employee5.fullName);
    // Static Properties
    class Grid {
        constructor(scale) {
            this.scale = scale;
            // code...
        }
        calculateDistanceFromOrigin(point) {
            let xDist = point.x - Grid.origin.x;
            let yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }
    Grid.origin = { x: 0, y: 0 };
    let grid1 = new Grid(1.0);
    let grid2 = new Grid(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 20, y: 30 }));
    // Abstract Classes
    class Animal7 {
        move() {
            console.log("roaming the earth...");
        }
    }
    class Department {
        constructor(name) {
            this.name = name;
        }
        printName() {
            console.log("Department name: " + this.name);
        }
    }
    class AccountingDepartment extends Department {
        constructor() {
            super("Accounting and Auditing");
        }
        printMeeting() {
            console.log("The Accounting Department meets each Monday at 10am.");
        }
        generateReports() {
            console.log("Generating accounting reports...");
        }
    }
    let department;
    // department = new Department();
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
    // department.generateReports();
    // Advanced Techniques
    // Constructor functions
    // Using a class as an interface
})(demo_06_01 || (demo_06_01 = {}));
