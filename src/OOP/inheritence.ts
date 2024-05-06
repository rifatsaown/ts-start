class Parent {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name);
        console.log(this.age);
    }
}


class Student extends Parent { // Student class inherits from Parent class
    constructor(name: string, age: number) {
        super(name, age);
    }
}

const student = new Student('John', 20);

student.display(); // John 20