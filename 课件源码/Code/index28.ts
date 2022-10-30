// //这个类具备一个属性name
// class Animal {
//     public name: string;
//     public constructor() { 
//     }
//   }
//简洁的写法
//这个类具备一个属性name
// class Animal {
//     //构造函数中声明属性
//     public constructor(public name: string) { 
//     }
//   }

//通过readonly关键字，设置只读属性
// class Animal {
//     readonly name;
//     public constructor(name:string) {
//       this.name = name;
//     }
//   }
  
//   let a = new Animal('Jack');
//   console.log(a.name); // Jack
//   a.name = 'Tom'; //报错