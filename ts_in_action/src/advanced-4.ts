interface DogInterface {
    run(): void;
}

interface CatInterface {
    jump(): void;
}

let pet: DogInterface & CatInterface = {
    run() {
        
    },
    jump() {
        
    }
};

let k1: number | string = "a";
// 字面量的联合类型
let k2: "a" | "b" | "c" = "a";
// 数字的联合类型
let k3: 1 | 2 | 3 = 1;

// 对象的联合类型
class Dog_4 implements DogInterface {
    run() {}
    eat() {}
}

class Cat_4 implements CatInterface {
    jump() {}
    eat() {}
}

enum Master {
    Boy,
    Girl
}

function getPet (master: Master) {
    let pet = master === Master.Boy ? new Dog_4() : new Cat_4();
    // 类型没有确认的情况下只能访问所有类型的共有成员
    pet.eat(); 
    // 访问 run、jump 会报错
    // pet.run();
    // pet.jump();
    return pet;
}

interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function getArea(s: Shape){
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * s.radius ** 2;
        default:
            return ((e: never) => {
                throw new Error(e)
            })(s)
    }
}

console.log(getArea({ kind: "circle", radius: 1 }));

// function getArea(s: Shape): number{
//     switch (s.kind) {
//         case "square":
//             return s.size * s.size;
//         case "rectangle":
//             return s.width * s.height;
//     }
// }
