interface Human {
    // new (name: string): void;
    name: string;
    eat(): void;
}

// 使用 Asian 实现 Human 接口
class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    // private name: string;
    name: string;
    eat() {}
    sleep() {}
}

interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}

interface Boy extends Man, Child {}

// 不写属性会报错：类型“{}”缺少类型“Boy”中的以下属性: run, name, eat, cry
const boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

class Auto {
    state = 1;
    // private state2 = 2;
}
// 接口 AutoInterface 继承 Auto
interface AutoInterface extends Auto {}
// 类 C 实现 AutoInterface 接口
class C implements AutoInterface {
    state = 1;
}
// 子类 Bus 继承 Auto 实现 AutoInterface 接口
class Bus extends Auto implements AutoInterface {}
