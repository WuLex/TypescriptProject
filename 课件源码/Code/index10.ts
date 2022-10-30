//函数-可选参数
// function buildName(firstName: string, lastName?: string) {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName;
//     }
//   }
//   let tomcat = buildName('Tom', 'Cat');
//   let tom = buildName('Tom');
//函数-默认值
// function buildName(firstName?: string, lastName: string = 'Cat') {
//     if (lastName) {
//         return firstName + ' ' + lastName;
//     } else {
//         return firstName;
//     }
// }
// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom'); 


// function reverse(x: number | string): number | string | void {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
