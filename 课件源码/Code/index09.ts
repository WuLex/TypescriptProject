//函数声明
function sum(x: number, y: number): number {
    return x + y;
}
sum(1,2)
// sum(1,2,3)  //多一个参数不可以
// sum(1) //少一个参数也不可以


//函数表达式
//这里用的是类型推断
// let mySum = function (x: number, y: number): number {
//     return x + y;
// };
//如果手动指定类型，应该是这样的：
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

//通过接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

