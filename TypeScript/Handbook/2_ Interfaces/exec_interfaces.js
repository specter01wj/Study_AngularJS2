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
    // Readonly properties
    // Excess Property Checks
    // Function Types
    // Indexable Types
    // Class Types
    // Extending Interfaces
    // Hybrid Types
    // Interfaces Extending Classes
})(demo_02_01 || (demo_02_01 = {}));
