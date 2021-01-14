var demo_03_01;
(function (demo_03_01) {
    // Literal Narrowing
    var helloWorld = "Hello World";
    var hiWorld = "Hi World";
    var UIElement = /** @class */ (function () {
        function UIElement() {
        }
        UIElement.prototype.animate = function (dx, dy, easing) {
            if (easing === "ease-in") {
                console.log('ease-in');
            }
            else if (easing === "ease-out") {
                console.log('ease-out');
            }
            else if (easing === "ease-in-out") {
                console.log('ease-in-out');
            }
            else {
                console.log('error!');
            }
        };
        return UIElement;
    }());
    var button = new UIElement();
    button.animate(0, 0, "ease-in");
    // button.animate(0, 0, "uneasy");
    // Numeric Literal Types
    function rollDice() {
        return (Math.floor(Math.random() * 6) + 1);
    }
    var result = rollDice();
    console.log(result);
    function setupMap(obj) { }
    ;
    setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
})(demo_03_01 || (demo_03_01 = {}));
