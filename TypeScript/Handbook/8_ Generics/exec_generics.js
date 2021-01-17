var demo_08_01;
(function (demo_08_01) {
    // Hello World of Generics
    function identity(arg) {
        return arg;
    }
    let output1 = identity('myString1');
    console.log(output1);
    let output2 = identity('myString2');
    console.log(output2);
    // Working with Generic Type Variables
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    let output3 = loggingIdentity(['myStr1', 'myStr2']);
    console.log(output3);
    // Generic Types
    // Generic Classes
    // Generic Constraints
    // Using Type Parameters in Generic Constraints
    // Using Class Types in Generics
})(demo_08_01 || (demo_08_01 = {}));
