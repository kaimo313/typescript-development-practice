// 原始类型
let bool: boolean = true;
let num: number = 313;
let str: string = 'kaimo';

// 数组
let arr: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '4'];

// 元组：是一种特殊的数组，它限定了数组元素的类型和个数
let tuple: [number, string] = [1, '2'];

// 元组越界访问
// tuple.push(2)
// console.log(tuple); // [1, '2', 2]
// tuple[2]

// 函数
let add = (a: number, b: number) =>  a + b;
// 定义函数类型
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
// 下面这种事不容许的，需要制定成员类型
// let obj: object = { name: 'kaimo', age: 18 };
// obj.age = 313;
let obj1: { name: string, age: number } = { name: 'kaimo', age: 18 };
obj1.age = 313; 

// Symbol 具有唯一的值
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined、null
let u: undefined = undefined;
let n: null = null;
// num = u;
// num = n;

// void 没有任何返回值的类型
let noReturn = () => {};

// any
let x;
x = 1;
x = [];
x = () => {};

// never 永远不会有返回值的类型
let error = (msg: string) => { throw new Error(msg) };
let infiniteLoop = () => {
    while (true) {}
}

