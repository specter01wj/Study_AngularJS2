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
    var myAdd5 = function (x, y) {
        return x + y;
    };
    var myAdd6 = function (x, y) {
        return x + y;
    };
    // Optional and Default Parameters
    function buildName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
    // let result1 = buildName('Bob');
    // let result2 = buildName("Bob", "Adams", "Sr.");
    var result3 = buildName("Bob", "Adams");
    console.log(result3);
    function buildName2(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    var result4 = buildName2("Bob");
    // let result5 = buildName("Bob", "Adams", "Sr.");
    var result6 = buildName2("Bob", "Adams");
    console.log(result4);
    function buildName3(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
        return firstName + " " + lastName;
    }
    var result7 = buildName3("Bob");
    var result8 = buildName3("Bob", undefined);
    // let result9 = buildName3("Bob", "Adams", "Sr.");
    var result10 = buildName3("Bob", "Adams");
    console.log(result8);
    function buildName4(firstName, lastName) {
        if (firstName === void 0) { firstName = "Will"; }
        return firstName + " " + lastName;
    }
    // let result11 = buildName4("Bob");
    // let result12 = buildName4("Bob", "Adams", "Sr.");
    var result13 = buildName4("Bob", "Adams");
    var result14 = buildName4(undefined, "Adams");
    console.log(result14);
    // Rest Parameters
    // this and arrow functions
    // this parameters
    // Overloads
})(demo_03_01 || (demo_03_01 = {}));
