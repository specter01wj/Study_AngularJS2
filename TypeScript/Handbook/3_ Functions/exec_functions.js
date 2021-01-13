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
})(demo_03_01 || (demo_03_01 = {}));
