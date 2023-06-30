// 创建一个接口或抽象类，定义产品的共同行为
interface Product {
    operation(): void;
  }
  
  // 创建具体产品类实现接口
  class ConcreteProductA implements Product {
    operation(): void {
      console.log('ConcreteProductA operation');
    }
  }
  
  class ConcreteProductB implements Product {
    operation(): void {
      console.log('ConcreteProductB operation');
    }
  }
  
  // 创建一个工厂类，定义创建产品的接口
  abstract class Creator {
    abstract createProduct(): Product;
  
    // 其他操作
    someOperation(): void {
      const product = this.createProduct();
      product.operation();
    }
  }
  
  // 具体工厂类实现工厂接口
  class ConcreteCreatorA extends Creator {
    createProduct(): Product {
      return new ConcreteProductA();
    }
  }
  
  class ConcreteCreatorB extends Creator {
    createProduct(): Product {
      return new ConcreteProductB();
    }
  }
  
  // 使用示例
  const creatorA = new ConcreteCreatorA();
  creatorA.someOperation(); // 输出：ConcreteProductA operation
  
  const creatorB = new ConcreteCreatorB();
  creatorB.someOperation(); // 输出：ConcreteProductB operation