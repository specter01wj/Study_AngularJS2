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
    function loggingIdentity2(arg) {
        console.log(arg.length);
        return arg;
    }
    // Generic Types
    function identity2(arg) {
        return arg;
    }
    let myIdentity = identity2;
    let myIdentity2 = identity2;
    let myIdentity3 = identity2;
    function identity4(arg) {
        return arg;
    }
    let myIdentity4 = identity4;
    console.log(myIdentity4('James'));
    function identity5(arg) {
        return arg;
    }
    let myIdentity5 = identity5;
    console.log(myIdentity5(202));
    let myIdentity6 = identity5;
    console.log(myIdentity6(['Jim', 'King', 'Mike']));
    // Generic Classes
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    /*myGenericNumber.add = function (x, y) {
      return x + y;
    };*/
    myGenericNumber.add = (x, y) => {
        return x + y;
    };
    console.log(myGenericNumber.zeroValue);
    console.log(myGenericNumber.add(8, 10));
    let stringNumeric = new GenericNumber();
    stringNumeric.zeroValue = "V1";
    stringNumeric.add = function (x, y) {
        return x + y;
    };
    console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
    function loggingIdentity3(arg) {
        console.log(arg.length);
        return arg;
    }
    // let output4 = loggingIdentity3(1001);
    let output4 = loggingIdentity3({ length: 100, value: 13 });
    console.log(output4);
    // Using Type Parameters in Generic Constraints
    function getProperty(obj, key) {
        return obj[key];
    }
    let x = { a: 1, b: 2, c: 3, d: 4 };
    console.log(getProperty(x, "a"));
    // getProperty(x, "m");
    // Using Class Types in Generics
    function create(c) {
        return new c();
    }
    class BeeKeeper {
    }
    class ZooKeeper {
    }
    class Animal {
    }
    class Bee extends Animal {
    }
    class Lion extends Animal {
    }
    function createInstance(c) {
        return new c();
    }
    // createInstance(Lion).keeper.nametag;
    console.log(createInstance(Lion));
    // createInstance(Bee).keeper.hasMask;
    console.log(createInstance(Bee).keeper);
})(demo_08_01 || (demo_08_01 = {}));
