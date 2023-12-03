// 变量定义函数类型
let addFunc: (x: number, y: number) => number;

// 接口定义函数类型
interface AddFunc1 {
    (x: number, y: number): number;
}

// 类型别名定义函数类型
type AddFunc2 = (x: number, y: number) => number;

// 实现具体函数
let add1: AddFunc1 = (x, y) => x + y;
let add2: AddFunc2 = (x, y) => x + y;

// 混合接口定义类库
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = '1.0.0';
    lib.doSomething = () => {}
    return lib;
}

let lib1 = getLib();
lib1();
lib1.version;
lib1.doSomething();
