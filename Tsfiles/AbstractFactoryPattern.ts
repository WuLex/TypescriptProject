// 抽象产品接口
interface Product {
  operation(): void;
}

// 具体产品A
class ConcreteProductA implements Product {
  operation() {
    console.log('具体产品A的操作');
  }
}

// 具体产品B
class ConcreteProductB implements Product {
  operation() {
    console.log('具体产品B的操作');
  }
}

// 抽象工厂接口
interface AbstractFactory {
  createProduct(): Product;
}

// 具体工厂A，用于创建具体产品A
class ConcreteFactoryA implements AbstractFactory {
  createProduct() {
    return new ConcreteProductA();
  }
}

// 具体工厂B，用于创建具体产品B
class ConcreteFactoryB implements AbstractFactory {
  createProduct() {
    return new ConcreteProductB();
  }
}

// 使用抽象工厂创建和使用产品
function clientCode(factory: AbstractFactory) {
  const product = factory.createProduct();
  product.operation();
}

// 示例用法
const factoryA = new ConcreteFactoryA();
clientCode(factoryA);

const factoryB = new ConcreteFactoryB();
clientCode(factoryB);