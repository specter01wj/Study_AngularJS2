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
