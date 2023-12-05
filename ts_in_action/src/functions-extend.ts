// 函数定义
function addFunc1(x:number, y:number) {
    return x + y;
}

let addFunc2: (x:number, y:number) => number;

type addFunc3 = (x:number, y:number) => number;

interface addFunc4 {
    (x:number, y:number): number;
}

function addFunc5(x:number, y?:number) {
    return y ? x + y : x;
}

addFunc5(1)

function addFunc6(x:number, y = 0, z:number, q = 1) {
    return x + y + z + q;
}
addFunc6(1, undefined, 3)

function addFunc7(x:number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}
console.log(addFunc7(1, 2, 3, 4, 5));

// 函数重载
function addFunc8(...rest: number[]): number;
function addFunc8(...rest: string[]): string;
function addFunc8(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}

console.log(addFunc8(1, 2));
console.log(addFunc8("kaimo", '313'));