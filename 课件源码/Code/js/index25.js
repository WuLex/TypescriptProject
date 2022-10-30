// var Animal = /** @class */ (function () {
//     function Animal(name) {
//         this.name = name;
//     }
//     Object.defineProperty(Animal.prototype, "name", {
//         get: function () {
//             return 'Jack';
//         },
//         set: function (value) {
//             console.log('setter: ' + value);
//         },
//         enumerable: false,
//         configurable: true
//     });
//     return Animal;
// }());
// var a = new Animal('Kitty'); // setter: Kitty
// a.name = 'Tom'; // setter: Tom
// console.log(a.name); // Jack
