"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("./node_modules/rxjs");
var observable = new rxjs_1.Observable(function (subscriber) {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(function () {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});
