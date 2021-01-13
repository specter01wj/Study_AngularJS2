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
    // Function Types
    // Indexable Types
    // Class Types
    // Extending Interfaces
    // Hybrid Types
    // Interfaces Extending Classes
})(demo_02_01 || (demo_02_01 = {}));
