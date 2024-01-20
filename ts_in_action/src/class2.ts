abstract class Animal {
    // 方法复用
    eat() {
        console.log('Animal is eating');
    }
    // 不指定方法具体实现，构成一个抽象方法
    abstract sleep(): void;
}

// let animal = new Animal(); // 错误: 不能创建一个抽象类的实例    

class Dog extends Animal {
    constructor(name: string) {
        super(); // 调用父类的构造函数
        this.name = name;
    }
    name: string;
    run() {}
    sleep() {
        console.log('Dog is sleeping');
    } // 实现抽象方法
}

let dog = new Dog('Tom');
dog.eat(); // 输出: Animal is eating

class Cat extends Animal {
    sleep() {
        console.log('Cat is sleeping');
    } // 实现抽象方法
}

let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach(a => a.sleep()); // 输出: Dog is sleeping, Cat is sleeping

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new WorkFlow().step1().step2(); // 链式调用

class MyFlow extends WorkFlow{
    next() {
        return this;
    }
}

new MyFlow().next().step1().next().step2();
