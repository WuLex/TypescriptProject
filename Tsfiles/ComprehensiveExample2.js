var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 类型批注和编译时类型检查
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
greet("John");
// greet(123); // 编译时错误：参数类型不匹配
// 类型推断
var age = 25;
// age = "25"; // 编译时错误：类型推断为 number，不能赋值为 string
// 类型擦除
function identity(value) {
    return value;
}
var result = identity("hello");
function printPerson(person) {
    console.log("Name: ".concat(person.name, ", Age: ").concat(person.age));
}
var john = { name: "John", age: 30 };
printPerson(john);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
console.log(color); // 输出 0
// Mixin
var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        console.log("Disposing...");
    };
    return Disposable;
}());
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        console.log("Activating...");
    };
    return Activatable;
}());
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var SmartObjectImplementation = /** @class */ (function () {
    function SmartObjectImplementation() {
        var _this = this;
        setInterval(function () { return _this.activate(); }, 1000);
    }
    return SmartObjectImplementation;
}());
applyMixins(SmartObjectImplementation, [Disposable, Activatable]);
var smartObj = new SmartObjectImplementation();
setTimeout(function () { return smartObj.dispose(); }, 5000);
// 泛型编程
function reverse(arr) {
    return arr.reverse();
}
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverse(numbers);
console.log(reversedNumbers); // 输出 [5, 4, 3, 2, 1]
// 命名空间
var MathUtils;
(function (MathUtils) {
    function sum(a, b) {
        return a + b;
    }
    MathUtils.sum = sum;
})(MathUtils || (MathUtils = {}));
console.log(MathUtils.sum(2, 3)); // 输出 5
// 元组
var tuple = ["John", 30];
console.log(tuple[0]); // 输出 "John"
console.log(tuple[1]); // 输出 30
// async/await
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Start");
                    return [4 /*yield*/, delay(2000)];
                case 1:
                    _a.sent();
                    console.log("End");
                    return [2 /*return*/];
            }
        });
    });
}
asyncFunction();
