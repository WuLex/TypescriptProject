// 具体产品A
var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
    }
    ConcreteProductA.prototype.operation = function () {
        console.log('具体产品A的操作');
    };
    return ConcreteProductA;
}());
// 具体产品B
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
    }
    ConcreteProductB.prototype.operation = function () {
        console.log('具体产品B的操作');
    };
    return ConcreteProductB;
}());
// 具体工厂A，用于创建具体产品A
var ConcreteFactoryA = /** @class */ (function () {
    function ConcreteFactoryA() {
    }
    ConcreteFactoryA.prototype.createProduct = function () {
        return new ConcreteProductA();
    };
    return ConcreteFactoryA;
}());
// 具体工厂B，用于创建具体产品B
var ConcreteFactoryB = /** @class */ (function () {
    function ConcreteFactoryB() {
    }
    ConcreteFactoryB.prototype.createProduct = function () {
        return new ConcreteProductB();
    };
    return ConcreteFactoryB;
}());
// 使用抽象工厂创建和使用产品
function clientCode(factory) {
    var product = factory.createProduct();
    product.operation();
}
// 示例用法
var factoryA = new ConcreteFactoryA();
clientCode(factoryA);
var factoryB = new ConcreteFactoryB();
clientCode(factoryB);
