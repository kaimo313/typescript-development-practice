let s: string = 'a'
s = null

// 接口兼容性
interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let x1: X = { a: 1, b: 2 };
let y1: Y = { a: 1, b: 2, c: 3};

x1 = y1;
// y1 = x1;

// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
    return handler
}

// 1) 参数个数
let handler1 = (a: number) => {}
hof(handler1) // 正确
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let a1 = (p1: number, p2: number) => {}
let b1 = (p1?: number, p2?: number) => {}
let c1 = (...args: number[]) => {}

a1 = b1
a1 = c1
// b1 = c1
// b1 = a1
c1 = a1
c1 = b1

// 2) 参数类型
let handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Point2D {
    x: number;
    y: number;
}

let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p3d;

// 3) 返回值类型
let foo1 = () => ({name: 'Alice'})
let foo2 = () => ({name: 'Alice', location: 'Beijing'})

foo1 = foo2
// foo2 = foo1

// 函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

// 枚举兼容性
enum Fruit {
    Apple,
    Banana
}
enum Color {
    Red,
    Yellow
}
// let fruit: Fruit.Apple = 3;
let no: number = Fruit.Apple;
// let color: Color.Red = Fruit.Apple;

// 类兼容
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    private name: string = ''
}

class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    private name: string = ''
}

let aa = new A(1, 2)
let bb = new B(1)
// aa = bb
// bb = aa

class C1 extends A {}

let cc = new C1(1, 2)
aa = cc
cc = aa

// 泛型兼容性
// interface Empty<T> {}
// let obj11: Empty<number> = {}
// let obj22: Empty<string> = {}
// obj11 = obj22

interface Empty<T> {
    value: T;
}
let log11 = <T>(x: T): T => {
    console.log("x");
    return x;
}
let log22 = <U>(y: U): U => {
    console.log("y");
    return y;
}
log11 = log22