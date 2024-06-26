// String types
let myString : string = "Hello World"; // or 'Hello World' or `Hello World` (backtick) 
// Boolean types
let isTrue : boolean = true; // or false

// Number types
let myNumber : number = 526616;
let myNumber2 : number = 0xf00d;
let myNumber3 : number = 0b1010;
let myNumber4 : number = 0o744;

// Array types
let myArray : string[] = ["Hello", "World"];
let myArray2 : Array<string> = ["Hello", "World"];
let myTuple : [string, number] = ["Hello", 526616];
// myTuple[1] = "World"; // Error

// Enum types
let myVoid : void = undefined; // or null
let myNull : null = null;
let myUndefined : undefined = undefined;

// Object types
let myObject : object = {}; 

let myObject2 : {name: string, age: number} = {name: "Hello", age: 526616};
let myObject3 : {name: string, age: number} = {name: "Hello", age: 526616};

let myUnion : string | number = "Hello";
let myUnion2 : string | number = 526616;