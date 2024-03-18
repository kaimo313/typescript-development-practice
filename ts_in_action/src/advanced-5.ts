let obj = {
    a: 1,
    b: 2,
    c: 3
}
// 抽取值形成数组
// function getValues(obj: any, keys: string[]) {
//     return keys.map(k => obj[k])
// }

// console.log(getValues(obj, ['a', 'b'])); // [1, 2]
// console.log(getValues(obj, ['e', 'f'])); // [undefined, undefined] 属性不存在也不报错

// keyof T
interface Obj {
    a: number,
    b: string
}

let key: keyof Obj;

// T[K]
let value: Obj['a'];

// T extends U

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(k => obj[k])
}

console.log(getValues(obj, ['a', 'b'])); // [1, 2]
console.log(getValues(obj, ['e', 'f'])); // 报错
