// Function to create an object with name and age and return the object
function createUser({ name, age }: { name: string, age: number }): { name: string, age: number} {
    console.log(`Name: ${name}, Age: ${age}`);
    return { name, age };
}

createUser({ name: "John", age: 25 }); // Name: John, Age: 25

// createUser({ name: "Jane", age: 22 , email: "r@s.com" }) // Error: Object literal may only specify known properties, and 'email' does not exist in type '{ name: string; age: number; }'.

// createUser({ name: "Jane" }) // Error: Argument of type '{ name: string; }' is not assignable to parameter of type '{ name: string; age: number; }'.

const userInfo ={
    name: "Jane",
    age: 22,
    email: "r@s.com"
}
createUser( userInfo ) // No error ,but it should have given error as email is not part of the function parameter type. 

