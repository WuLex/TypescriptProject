//断言的限制

//两者之间有共同的属性或者方法，就可以互相断言
// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }

// function testAnimal(animal: Animal) {
//     return (animal as Cat);
// }
// function testCat(cat: Cat) {
//     return (cat as Animal);
// }


// //两者没有相同的属性或者方法，则无法断言
// interface Animal {
//     name: string;
// }
// interface Cat {
//     // name: string;
//     run(): void;
// }

// function testAnimal(animal: Animal) {
//     return (animal as Cat);
// }
// function testCat(cat: Cat) {
//     return (cat as Animal);
// }