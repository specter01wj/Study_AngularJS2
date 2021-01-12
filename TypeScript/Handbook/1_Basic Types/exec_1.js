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
})(demo_01_01 || (demo_01_01 = {}));
