class Animal {
    constructor(public name: string, public species: string, public sound: string){}

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('Dog', 'Canis lupus', 'Bark');
dog.makeSound(); // Dog says Bark