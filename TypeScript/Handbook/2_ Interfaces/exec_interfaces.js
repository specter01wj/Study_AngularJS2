var demo_02_01;
(function (demo_02_01) {
    // Our First Interface
    function printLabel(labeledObj) {
        console.log(labeledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function printLabel2(labeledObj) {
        console.log(labeledObj.label);
    }
    var myObj2 = { size: 10, label: "Size 10 Object 222" };
    printLabel(myObj2);
    function createSquare(config) {
        var newSquare = { color: 'white', area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare1 = createSquare({ color: 'Black' });
    console.log(mySquare1);
    var p1 = { x: 10, y: 20 };
    // p1.x = 5;
    var a = [1, 2, 3, 4];
    var ro = a;
    // ro[0] = 12;
    // ro.push(5);
    // ro.length = 100;
    // a = ro;
    a = ro;
    function createSquare2(config) {
        return {
            color: config.color || "red",
            area: config.width ? config.width * config.width : 20
        };
    }
    var mySquare2 = createSquare2({ color: "blue", width: 100 });
    console.log(mySquare2);
    var mySquare3 = createSquare2({ width: 200, opacity: 0.5 });
    console.log(mySquare3);
    var squareOptions = { colour: "purple", width: 300 };
    var mySquare4 = createSquare2(squareOptions);
    console.log(mySquare4);
    var mySearch;
    mySearch = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    };
    console.log(mySearch('abcdefg', 'de'));
    var mySearch2;
    mySearch2 = function (src, sub) {
        var result = src.search(sub);
        return result > -1;
    };
    var mySearch3;
    mySearch3 = function (src, sub) {
        var result = src.search(sub);
        return result > -1;
    };
    var myArray;
    myArray = ["Bob", "Fred"];
    var myStr1 = myArray[0];
    console.log(myStr1);
    var myArray2 = ["Alice", "Bob"];
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
            this.currentTime = new Date();
        }
        return Clock;
    }());
    var Clock2 = /** @class */ (function () {
        function Clock2(h, m) {
            this.currentTime = new Date();
        }
        Clock2.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock2;
    }());
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    var DigitalClock = /** @class */ (function () {
        function DigitalClock(h, m) {
        }
        DigitalClock.prototype.tick = function () {
            console.log("beep beep");
        };
        return DigitalClock;
    }());
    var AnalogClock = /** @class */ (function () {
        function AnalogClock(h, m) {
        }
        AnalogClock.prototype.tick = function () {
            console.log("tick tock");
        };
        return AnalogClock;
    }());
    var digital = createClock(DigitalClock, 12, 17);
    var analog = createClock(AnalogClock, 7, 32);
    console.log(digital.tick());
    console.log(analog.tick());
    var Clock4 = /** @class */ (function () {
        function Clock4(h, m) {
        }
        Clock4.prototype.tick = function () {
            console.log("beep beep! clock4");
        };
        return Clock4;
    }());
    var clock4 = new Clock4(12, 17);
    clock4.tick();
    // Extending Interfaces
    // Hybrid Types
    // Interfaces Extending Classes
})(demo_02_01 || (demo_02_01 = {}));
