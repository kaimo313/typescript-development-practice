class Log<T> {
    run(value: T) {
        console.log(value);
        return value;
    }
}

// 传参
let log1 = new Log<number>();
log1.run(1);
// 不传参
let log2 = new Log();
log2.run("1");

interface Length {
    length: number;
}

function log<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}

// 输入的参数有 length 属性
log([1, 2]);
log('123');
log({length: 1});

