var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 创建具体产品类实现接口
var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
    }
    ConcreteProductA.prototype.operation = function () {
        console.log('ConcreteProductA operation');
    };
    return ConcreteProductA;
}());
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
    }
    ConcreteProductB.prototype.operation = function () {
        console.log('ConcreteProductB operation');
    };
    return ConcreteProductB;
}());
// 创建一个工厂类，定义创建产品的接口
var Creator = /** @class */ (function () {
    function Creator() {
    }
    // 其他操作
    Creator.prototype.someOperation = function () {
        var product = this.createProduct();
        product.operation();
    };
    return Creator;
}());
// 具体工厂类实现工厂接口
var ConcreteCreatorA = /** @class */ (function (_super) {
    __extends(ConcreteCreatorA, _super);
    function ConcreteCreatorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreatorA.prototype.createProduct = function () {
        return new ConcreteProductA();
    };
    return ConcreteCreatorA;
}(Creator));
var ConcreteCreatorB = /** @class */ (function (_super) {
    __extends(ConcreteCreatorB, _super);
    function ConcreteCreatorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreatorB.prototype.createProduct = function () {
        return new ConcreteProductB();
    };
    return ConcreteCreatorB;
}(Creator));
// 使用示例
var creatorA = new ConcreteCreatorA();
creatorA.someOperation(); // 输出：ConcreteProductA operation
var creatorB = new ConcreteCreatorB();
creatorB.someOperation(); // 输出：ConcreteProductB operation
