// 类型批注和编译时类型检查
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet("John");
// greet(123); // 编译时错误：参数类型不匹配

// 类型推断
let age = 25;
// age = "25"; // 编译时错误：类型推断为 number，不能赋值为 string

// 类型擦除
function identity<T>(value: T): T {
  return value;
}

const result = identity("hello");
// const result: string = identity("hello"); // 编译时错误：类型推断为 string，不需要显式指定

// 接口
interface Person {
  name: string;
  age: number;
}

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const john: Person = { name: "John", age: 30 };
printPerson(john);

// 枚举
enum Color {
  Red,
  Green,
  Blue,
}

const color: Color = Color.Red;
console.log(color); // 输出 0

// Mixin
class Disposable {
  dispose() {
    console.log("Disposing...");
  }
}

class Activatable {
  activate() {
    console.log("Activating...");
  }
}

// 使用泛型和交叉类型实现 mixin
type SmartObject = Disposable & Activatable;

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

class SmartObjectImplementation implements SmartObject {
  dispose: () => void;
  activate: () => void;

  constructor() {
    setInterval(() => this.activate(), 1000);
  }
}

applyMixins(SmartObjectImplementation, [Disposable, Activatable]);

const smartObj = new SmartObjectImplementation();
setTimeout(() => smartObj.dispose(), 5000);

// 泛型编程
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverse(numbers);
console.log(reversedNumbers); // 输出 [5, 4, 3, 2, 1]

// 命名空间
namespace MathUtils {
  export function sum(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.sum(2, 3)); // 输出 5

// 元组
const tuple: [string, number] = ["John", 30];
console.log(tuple[0]); // 输出 "John"
console.log(tuple[1]); // 输出 30

// async/await
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await delay(2000);
  console.log("End");
}

asyncFunction();