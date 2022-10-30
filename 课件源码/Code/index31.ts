// function createArray(length: number, value: any): Array<any> {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// createArray(3, 'x'); // ['x', 'x', 'x']

//通过泛型来指定类型
// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// createArray<string>(3, 'x'); // ['x', 'x', 'x']

// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
// //可以不指定类型，通过类型推断来自动推断出类型
// createArray(3, 'x'); // ['x', 'x', 'x']
