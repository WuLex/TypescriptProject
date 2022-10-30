// interface SearchFunc {
//     (source: string, subString: string): boolean;
//   }
  
//   let mySearch: SearchFunc;
//   mySearch = function(source: string, subString: string) {
//       return source.search(subString) !== -1;
//   }


// interface CreateArrayFunc {
//     <T>(length: number, value: T): Array<T>;
// }

// let createArray: CreateArrayFunc;
// createArray = function<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// createArray(3, 'x'); // ['x', 'x', 'x']

// interface CreateArrayFunc<T> {
//     (length: number, value: T): Array<T>;
// }

// let createArray: CreateArrayFunc<string>;
// createArray = function<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

// createArray(3, 'x'); // ['x', 'x', 'x']