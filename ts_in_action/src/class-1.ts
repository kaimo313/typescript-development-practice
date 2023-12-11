class Dog {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    run() {}
    private privateMethod() {}
    protected protectedMethod() {}
    readonly legs: number = 4
    static food: string = "bones"
}

console.log(Dog.prototype);
let dog = new Dog("wangwang");
console.log(dog);
// console.log(dog.privateMethod());
// console.log(dog.protectedMethod());
console.log(Dog.food);
console.log(dog.food);

class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name);
        // this 需在 super 之后
        this.color = color;
        // this.privateMethod();
        this.protectedMethod();
    }
    // color: string;
}
console.log(Husky.food);