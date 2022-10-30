//类型断言 vs 类型声明

// function getCacheData(key: string): any {
//     return (window as any).cache[key];
// }

// interface Cat {
//     name: string;
//     run(): void;
// }
// //类型断言
// // const tom = getCacheData('tom') as Cat;
// //类型声明
// const tom: Cat = getCacheData('tom');
// tom.run();

// interface Animal {
//     name: string;
//     run(): void;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }

// const animal: Animal = {
//     name: 'tom',
//     run(){

//     }
// };
// // let tom = animal as Cat;
// let tom: Cat = animal;