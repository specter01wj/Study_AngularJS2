var demo_07_01;
(function (demo_07_01) {
    // Numeric enums
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
    let UserResponse;
    (function (UserResponse) {
        UserResponse[UserResponse["No"] = 0] = "No";
        UserResponse[UserResponse["Yes"] = 1] = "Yes";
    })(UserResponse || (UserResponse = {}));
    function respond(recipient, message) {
        // ...
    }
    respond("Princess Caroline", UserResponse.Yes);
    let E;
    (function (E) {
        E[E["A"] = getSomeValue()] = "A";
        E[E["B"] = getSomeValue()] = "B";
    })(E || (E = {}));
    function getSomeValue() { return 100; }
    ;
    // String enums
    let Direction2;
    (function (Direction2) {
        Direction2["Up"] = "UP";
        Direction2["Down"] = "DOWN";
        Direction2["Left"] = "LEFT";
        Direction2["Right"] = "RIGHT";
    })(Direction2 || (Direction2 = {}));
    // Heterogeneous enums
    let BooleanLikeHeterogeneousEnum;
    (function (BooleanLikeHeterogeneousEnum) {
        BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
        BooleanLikeHeterogeneousEnum["Yes"] = "YES";
    })(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
    // Computed and constant members
    (function (E) {
        E[E["X"] = 0] = "X";
    })(E || (E = {}));
    let E1;
    (function (E1) {
        E1[E1["X"] = 0] = "X";
        E1[E1["Y"] = 1] = "Y";
        E1[E1["Z"] = 2] = "Z";
    })(E1 || (E1 = {}));
    let E2;
    (function (E2) {
        E2[E2["A"] = 1] = "A";
        E2[E2["B"] = 2] = "B";
        E2[E2["C"] = 3] = "C";
    })(E2 || (E2 = {}));
    let FileAccess;
    (function (FileAccess) {
        FileAccess[FileAccess["None"] = 0] = "None";
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        FileAccess[FileAccess["G"] = "123".length] = "G";
    })(FileAccess || (FileAccess = {}));
    // Union enums and enum member types
    let ShapeKind;
    (function (ShapeKind) {
        ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
        ShapeKind[ShapeKind["Square"] = 1] = "Square";
    })(ShapeKind || (ShapeKind = {}));
    let c = {
        // kind: ShapeKind.Square,
        kind: ShapeKind.Circle,
        radius: 100,
    };
    console.log(c);
    (function (E2) {
        E2[E2["Foo"] = 0] = "Foo";
        E2[E2["Bar"] = 1] = "Bar";
    })(E2 || (E2 = {}));
    function f(x) {
        // if (x !== E2.Foo || x !== E2.Bar) {
        if (x !== E2.Foo && x !== E2.Bar) {
        }
    }
    // Enums at runtime
    let E3;
    (function (E3) {
        E3[E3["X"] = 0] = "X";
        E3[E3["Y"] = 1] = "Y";
        E3[E3["Z"] = 2] = "Z";
    })(E3 || (E3 = {}));
    function f3(obj) {
        return obj.X;
    }
    console.log(f3(E3));
    // Enums at compile time
    let LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
        LogLevel[LogLevel["WARN"] = 1] = "WARN";
        LogLevel[LogLevel["INFO"] = 2] = "INFO";
        LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    })(LogLevel || (LogLevel = {}));
    function printImportant(key, message) {
        const num = LogLevel[key];
        if (num <= LogLevel.WARN) {
            console.log("Log level key is:", key);
            console.log("Log level value is:", num);
            console.log("Log level message is:", message);
        }
    }
    printImportant("ERROR", "This is a message");
    printImportant("WARN", "This is a message");
    printImportant("DEBUG", "This is a message");
    // Ambient enums
})(demo_07_01 || (demo_07_01 = {}));
