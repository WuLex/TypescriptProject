//接口的合并
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    // price: string;  //类型相同才能合并，类型不同合并会报错
    weight: number;
    alert(s: string, n: number): string;
}
//相当于=>
interface Alarm {
    price: number;
    weight: number;
    alert(s: string, n: number): string;
} 