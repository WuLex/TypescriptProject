// var Animal = /** @class */ (function () {
//     function Animal(name) {
//         this._name = name;
//     }
//     Animal.prototype.sayHi = function () {
//         return "My name is ".concat(this._name);
//     };
//     Animal.sayHello = function () {
//         return "hello,你好呀";
//     };
//     return Animal;
// }());
// var a = new Animal('Jack');
// //非静态方法，通过类的实例来调用
// console.log(a.sayHi()); // My name is Jack 
// //静态方法使用static来修饰，使用的时候直接通过类来调用
// console.log(Animal.sayHello()); // hello,你好呀
