//类型断言  将一个联合类型断言为一个指定类型

// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }

// function getName(animal: Cat | Fish) {
//     return animal.name;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }
// //将我们的animal对象断言为Fish
// function isFish(animal: Cat | Fish) {
//     if (typeof (animal as Fish).swim === 'function') {
//         return true;
//     }
//     return false;
// }

// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }

// function swim(animal: Cat | Fish) {
//     (animal as Fish).swim();
// }

// const tom: Cat = {
//     name: 'Tom',
//     run() { console.log('run') }
// };
// swim(tom);