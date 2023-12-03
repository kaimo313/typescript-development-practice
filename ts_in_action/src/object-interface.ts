interface List {
    readonly id: number;
    name: string;
    // [x: string]: any;
    age?: number;
}

interface Result {
    data: List[];
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id, value.name);
        if(value.age) {
            console.log(value.age);
        }
        // value.id++; // 无法为“id”赋值，因为它是只读属性。
    })
}

let result = {
    data: [
        { id: 1, name: 'a' , sex: "male"},
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
    ]
};

render(result);

// 报错
// render({
//     data: [
//         { id: 1, name: 'a' , sex: "male"},
//         { id: 2, name: 'b' },
//         { id: 3, name: 'c' },
//     ]
// })

// 使用类型断言
// render({
//     data: [
//         { id: 1, name: 'a' , sex: "male"},
//         { id: 2, name: 'b' },
//         { id: 3, name: 'c' },
//     ]
// } as Result);
// 或者使用 <Result>
// render(<Result>{
//     data: [
//         { id: 1, name: 'a' , sex: "male"},
//         { id: 2, name: 'b' },
//         { id: 3, name: 'c' },
//     ]
// });

// 字符串索引签名：[x: string]: any;
// render({
//     data: [
//         { id: 1, name: 'a' , sex: "male"},
//         { id: 2, name: 'b' },
//         { id: 3, name: 'c' },
//     ]
// });

// 用数字索引的接口：
interface StringArray {
    [index: number]: string;
}

let chars: StringArray = ["A", "B"];


// 用字符串索引的接口：
interface Names {
    [x: string]: string;
    // y: number // 类型“number”的属性“y”不能赋给“string”索引类型“string”。
    // 混用
    [y: number]: string;
}