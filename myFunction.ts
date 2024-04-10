// Function without return type
const addtwo = (a: number, b: number) => {
    // a.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.
    return a + b;
}
console.log(addtwo(1, 2)); // 3


// Function with return type 
const addtwo2 = (a: number, b: number): number => { //  : number is the return type of the function
    return a + b;
    // return "Hello"; // Error: Type 'string' is not assignable to type 'number'.
}
console.log(addtwo2(1, 2)); // 3


// Function with optional parameter
const addtwo3 = (a: number, b: number, c?: number): number => {
    return a + b + (c ? c : 0);
    // return a + b + c; // Error: Argument of type 'undefined' is not assignable to parameter of type 'number'. 
}
console.log(addtwo3(1, 2)); // 3


// Function with default parameter
const addtwo4 = (a: number, b: number, c: number = 0): number => {
    return a + b + c;
}
console.log(addtwo4(1, 2)); // 3


// Function return can be number or string or any other type (Union type)
const addtwo5 = (a: number, b: number): number | string => {
    return a + b;
    // return "Hello"; // No error
}
console.log(addtwo5(1, 2)); // 3


// Function with rest parameter
const addtwo6 = (a: number, b: number, ...c: number[]): number => {
    let sum = a + b;
    c.forEach((num) => {
        sum += num;
    });
    return sum;
}
console.log(addtwo6(1, 2, 1, 5, 5)); // 14


// Function with map and return type string
const heros = ["Superman", "Batman", "Spiderman", "Ironman", "Thor"];
const singleHero = heros.map((hero , index) : string => { // : string is the return type of the function
    // return 5; // Error: Type '5' is not assignable to type 'string'.
    return `${hero} is at index ${index}`;
});
console.log(singleHero); 


// Return void
const addtwo7 = (a: number, b: number): void => { // void is used when the function does not return anything
    console.log(a + b);
}
addtwo7(1, 2); // 3


// Return never
const throwError = (message: string): never => { // never is used when the function never returns anything (not even void) 
    throw new Error(message);
}
throwError("This is an error message"); // Error: This is an error message