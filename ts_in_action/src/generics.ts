function log<T>(value: T): T {
    console.log(value);
    return value;
}

// 直接指明 T 类型
log<string[]>(['a', 'b']);
// 利用类型推论（推荐方式）
log(['a', 'b']);

// type Log = <T>(value: T) => T;
// const myLog: Log = log;

// interface Log {
//     <T>(value: T): T;
// }

// interface Log<T> {
//     (value: T): T;
// }

// let myLog: Log<number> = log;
// myLog(1);

interface Log<T = string> {
    (value: T): T;
}
let myLog: Log = log;
myLog("2");