//函数  剩余类型  
// function push(array, ...items) {
//     items.forEach(function (item) {
//         array.push(item);
//     });
// }

// let a: any[] = [];
// push(a, 1, 2, 3, 4, 5, 6, 7, 8, 9);

function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let a = [];
push(a, 1, 2, 3, '4', '5', true);


//重载
// function reverse(x: number | string): number | string | void {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
// reverse(1)
// reverse('1')
//精准定义
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(1)
reverse('1')