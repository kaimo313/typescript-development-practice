// 数字枚举 默认取值从 0 开始，后面的成员递增
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// 反向映射：既可以使用 key 索引，也可以使用 value 索引
console.log(Role);

// 字符串枚举
enum Message {
    Success = 'success',
    Fail = 'fail'
}
console.log(Message);

// 异构枚举：数字枚举与字符串枚举混用（不建议使用，容易引起混淆）
enum Status {
    OK = 200,
    Error = 'Error'
}
console.log(Status);

// 枚举成员
// 无法为“Reporter”赋值，因为它是只读属性。
// Role.Reporter = 2

enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed
    d = Math.random(),
    e = '123'.length,
    f = 4
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E {
    a,
    b
}
enum F {
    a = 0,
    b = 1
}
enum G {
    a = "apple",
    b = "banana"
}

let e: E = 1;
let f: F = 1;
// 此比较似乎是无意的，因为类型“E”和“F”没有重叠。
// e === f

let e1: E.a;
let e2: E.b;
let e3: E.a;

let g1: G = G.b;
let g2: G.a = G.a;