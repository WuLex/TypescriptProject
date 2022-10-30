// //使用关键字定义抽象类和抽象方法
// abstract class Animal {
//     public name;
//     public constructor(name: string) {
//         this.name = name;
//     }
//     public abstract sayHi(): void;
// }

// let a = new Animal('Jack');//无法创建抽象类的实例

//抽象类本身不能去实例化，需要通过子类去继承，然后由子类去实现抽象类的方法
// abstract class Animal {
//     public name;
//     public constructor(name: string) {
//       this.name = name;
//     }
//     public abstract sayHi(): void;
//   }

//   class Cat extends Animal {
//     public eat() {
//       console.log(`${this.name} is eating.`);
//     } 
//   }

//   let cat = new Cat('Tom');


//正确的栗子
// abstract class Animal {
//     public name;
//     public constructor(name) {
//         this.name = name;
//     }
//     public abstract sayHi();
// }

// class Cat extends Animal {
//     public sayHi() {
//         console.log(`Meow, My name is ${this.name}`);
//     }
// }

// let cat = new Cat('Tom');
// cat.sayHi()