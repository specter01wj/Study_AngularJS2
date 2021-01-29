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
    // Omit<Type, Keys>
    // Exclude<Type, ExcludedUnion>
    // Extract<Type, Union>
    // NonNullable<Type>
    // Parameters<Type>
    // ConstructorParameters<Type>
    // ReturnType<Type>
    // InstanceType<Type>
    // Required<Type>
    // ThisParameterType<Type>
    // OmitThisParameter<Type>
    // ThisType<Type>
})(demo_02_01 || (demo_02_01 = {}));
