//public 全局可以使用
// class Animal {
//     public _name;
//     public constructor(name:string) {
//       this._name = name;
//     }
//   }
  
//   let a = new Animal('Jack');
//   console.log(a._name); // Jack
//   a._name = 'Tom';
//   console.log(a._name); // Tom

// //私有的 只能在类的内部使用
// class Animal {
//     private _name;
//     public constructor(name:string) {
//       this._name = name;
//     }
//   }
  
//   let a = new Animal('Jack');
//   console.log(a._name); // Jack
//   a._name = 'Tom';
//   console.log(a._name); // Tom

//protected 允许子类访问
// class Animal {
//     protected name;
//     public constructor(name:string) {
//       this.name = name;
//     }
//   }
  
//   class Cat extends Animal {
//     constructor(name:string) {
//       super(name);
//       console.log(this.name);
//     }
//   }
