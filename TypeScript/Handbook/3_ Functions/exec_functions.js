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
    // Optional and Default Parameters
    // Rest Parameters
    // this and arrow functions
    // this parameters
    // Overloads
})(demo_03_01 || (demo_03_01 = {}));
