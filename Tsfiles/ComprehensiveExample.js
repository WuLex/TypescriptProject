"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义类
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // 定义方法
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
// 定义泛型函数
function reverse(array) {
    return array.reverse();
}
// 使用装饰器
function log(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Calling ".concat(key, " with arguments: ").concat(args));
        var result = originalMethod.apply(this, args);
        console.log("Method ".concat(key, " returned: ").concat(result));
        return result;
    };
    return descriptor;
}
// 使用模块
var events_1 = require("events");
// 创建事件发射器实例
var emitter = new events_1.EventEmitter();
// 注册事件处理程序
emitter.on('data', function (data) {
    console.log("Received data: ".concat(data));
});
// 触发事件
emitter.emit('data', 'Hello, TypeScript!');
// 创建数组
var numbers = [1, 2, 3, 4, 5];
// 创建元组
var person = ['John', 30];
// 调用泛型函数
var reversedNumbers = reverse(numbers);
// 使用类型批注和编译时类型检查
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
// 创建对象实例
var circle = new Circle(5);
// 调用类的方法
var area = circle.getArea();
// 使用接口
function printPoint(point) {
    console.log("Point coordinates: (".concat(point.x, ", ").concat(point.y, ")"));
}
// 打印结果
console.log(reversedNumbers);
greet('Alice');
console.log(area);
printPoint({ x: 10, y: 20 });
