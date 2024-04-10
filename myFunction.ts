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