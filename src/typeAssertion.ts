let anything : any;

anything = "Hello World";
(anything as string).toUpperCase(); // Type Assertion

anything = 10;
(anything as number).toFixed(2); // Type Assertion


const kgToLbs = (weight: number | string) :number |string |undefined => {
    if(typeof weight === "string"){
        return `Weight is ${(parseFloat(weight) * 2.20462).toFixed(2)}`;
    }
    return (weight * 2.20462);
}

const result = kgToLbs("10") as string; // Type Assertion
console.log(result.toUpperCase());

const result2 = kgToLbs(10) as number; // Type Assertion
console.log(result2.toFixed(2));



type CustomError = {
    message: string;
    code?: number;
}
try {
    
} catch (error) {
    console.log((error as CustomError).message); // Type Assertion    
}
