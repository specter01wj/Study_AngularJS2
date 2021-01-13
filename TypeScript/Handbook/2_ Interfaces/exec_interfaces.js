var demo_02_01;
(function (demo_02_01) {
    // Our First Interface
    function printLabel(labeledObj) {
        console.log(labeledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function printLabel2(labeledObj) {
        console.log(labeledObj.label);
    }
    let myObj2 = { size: 10, label: "Size 10 Object 222" };
    printLabel(myObj2);
})(demo_02_01 || (demo_02_01 = {}));
