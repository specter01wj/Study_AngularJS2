var demo_01_01;
(function (demo_01_01) {
    // Boolean
    let isDone = false;
    console.log(isDone);
    // Number
    let decimal = 6;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;
    // let big: bigint = 100n;
    // console.log(big);
    // -t es2020
    // String
    let color = 'blue';
    color = 'red';
    let fullName = `Bob Bobbington`;
    let age = 37;
    let sentence = `Hellow, my name is ${fullName}.

	I'll be ${age + 1} years old next month.`;
    console.log(sentence);
    let sentence2 = "Hello, my name is " +
        fullName +
        ".\n\n" +
        "I'll be " +
        (age + 1) +
        " years old next month.";
    // Array
    let list = [1, 2, 3];
    let list2 = [1, 2, 3];
    // Tuple
    let x;
    x = ["hello", 10];
    console.log(x);
    console.log(x[0].substring(1));
    // Enum
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Blue;
    console.log(c);
    let Color_2;
    (function (Color_2) {
        Color_2[Color_2["Red"] = 1] = "Red";
        Color_2[Color_2["Green"] = 2] = "Green";
        Color_2[Color_2["Blue"] = 3] = "Blue";
    })(Color_2 || (Color_2 = {}));
    let c2 = Color_2.Blue;
    console.log(c2);
    let Color_3;
    (function (Color_3) {
        Color_3[Color_3["Red"] = 5] = "Red";
        Color_3[Color_3["Green"] = 2] = "Green";
        Color_3[Color_3["Blue"] = 22] = "Blue";
    })(Color_3 || (Color_3 = {}));
    let c3 = Color_3.Blue;
    console.log(c3);
    let colorName = Color[2];
    console.log(colorName);
    // Unknown
    let notSure = 4;
    notSure = "maybe a string instead";
    console.log(notSure);
    notSure = false;
    console.log(notSure);
    //declare const maybe: unknown;
    let maybe;
    // const aNumber: number = maybe;
    if (maybe === true) {
        const aBoolean = maybe;
        // const aString: string = maybe;
    }
    if (typeof maybe === "string") {
        const aString = maybe;
        // const aBoolean: boolean = maybe;
    }
    // Any
    //declare function getValue(key: string): any;
    function getValue(key) {
        return key;
    }
    ;
    const str = getValue('myString');
    console.log(str);
    let looselyTyped = 4;
    // looselyTyped.ifItExists();
    looselyTyped.toFixed();
    let strictlyTyped = 4;
    // strictlyTyped.toFixed();
    let looselyTyped2 = {};
    // let d = looselyTyped2.a.b.c.d;
    // console.log(d);
    // Void
    function warnUser() {
        console.log("This is my warning message");
    }
    let unusable = undefined;
    unusable = null;
    console.log(unusable);
    // Null and Undefined
    let u = undefined;
    let n = null;
    let n2 = null;
    // Never
    function error(message) {
        throw new Error(message);
    }
    function fail() {
        return error("Something failed");
    }
    function infiniteLoop() {
        while (true) { }
    }
    // Object
    // declare function create(o: object | null): void;
    function create(o) { }
    ;
    create({ prop: 0 });
    create(null);
    // create(42);
    // create("string");
    // create(false);
    create(undefined);
    // Type assertions
    let someValue = "this is a string";
    let strLength = someValue.length;
    console.log(strLength);
    let someValue2 = "this is a string";
    let strLength2 = someValue.length;
    console.log(strLength2);
})(demo_01_01 || (demo_01_01 = {}));
