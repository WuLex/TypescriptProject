// 定义接口
interface Point {
    x: number;
    y: number;
  }
  
  // 定义类
  class Circle {
    private radius: number;
    
    constructor(radius: number) {
      this.radius = radius;
    }
    
    // 定义方法
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // 定义泛型函数
  function reverse<T>(array: T[]): T[] {
    return array.reverse();
  }
  
  // 使用装饰器
  function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      console.log(`Calling ${key} with arguments: ${args}`);
      const result = originalMethod.apply(this, args);
      console.log(`Method ${key} returned: ${result}`);
      return result;
    }
    
    return descriptor;
  }
  
  // 使用模块
  import { EventEmitter } from 'events';
  
  // 创建事件发射器实例
  const emitter = new EventEmitter();
  
  // 注册事件处理程序
  emitter.on('data', (data: string) => {
    console.log(`Received data: ${data}`);
  });
  
  // 触发事件
  emitter.emit('data', 'Hello, TypeScript!');
  
  // 创建数组
  const numbers: number[] = [1, 2, 3, 4, 5];
  
  // 创建元组
  const person: [string, number] = ['John', 30];
  
  // 调用泛型函数
  const reversedNumbers = reverse(numbers);
  
  // 使用类型批注和编译时类型检查
  function greet(name: string): void {
    console.log(`Hello, ${name}!`);
  }
  
  // 创建对象实例
  const circle = new Circle(5);
  
  // 调用类的方法
  const area = circle.getArea();
  
  // 使用接口
  function printPoint(point: Point): void {
    console.log(`Point coordinates: (${point.x}, ${point.y})`);
  }
  
  // 打印结果
  console.log(reversedNumbers);
  greet('Alice');
  console.log(area);
  printPoint({ x: 10, y: 20 });