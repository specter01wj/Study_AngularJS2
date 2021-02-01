var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var demo_02_01;
(function (demo_02_01) {
    function updateTodo(todo, fieldsToUpdate) {
        return __assign(__assign({}, todo), fieldsToUpdate);
    }
    var todo1 = {
        title: "organize desk",
        description: "clear clutter"
    };
    var todo2 = updateTodo(todo1, {
        description: "throw out trash"
    });
    console.log(todo1);
    console.log(todo2);
    var todo3 = {
        title: "Delete inactive users"
    };
    var nav = {
        about: { title: "about" },
        contact: { title: "contact" },
        home: { title: "home" }
    };
    console.log(nav.about);
    var todo4 = {
        title: "Clean room",
        completed: false
    };
    console.log(todo4);
    var todo5 = {
        title: "Clean room2",
        completed: false
    };
    console.log(todo5);
    // type T24 = ReturnType<string>;
    // type T25 = ReturnType<Function>;
    // InstanceType<Type>
    var C = /** @class */ (function () {
        function C() {
            this.x = 0;
            this.y = 0;
        }
        return C;
    }());
    var obj = { a: 5 };
    // const obj2: Required<Props> = { a: 5 };
    // ThisParameterType<Type>
    function toHex() {
        return this.toString(16);
    }
    function numberToString(n) {
        return toHex.apply(n);
    }
    // OmitThisParameter<Type>
    function toHex2() {
        return this.toString(16);
    }
    var fiveToHex = toHex.bind(5);
    console.log(fiveToHex());
    function makeObject(desc) {
        var data = desc.data || {};
        var methods = desc.methods || {};
        return __assign(__assign({}, data), methods);
    }
    var obj2 = makeObject({
        data: { x: 0, y: 0 },
        methods: {
            moveBy: function (dx, dy) {
                this.x += dx; // Strongly typed this
                this.y += dy; // Strongly typed this
            }
        }
    });
    obj2.x = 10;
    obj2.y = 20;
    obj2.moveBy(5, 5);
})(demo_02_01 || (demo_02_01 = {}));
