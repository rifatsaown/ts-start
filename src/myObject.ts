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


//--------------------------------- types ------------------------------------//

// combining types
type cardNumber = {
    cardNumber: number
}
type cardHolder = {
    cardHolder: string
}
type expiryDate = {
    expiryDate: string
}
type cardDetails = cardNumber & cardHolder & expiryDate & { // combining types using &
    cvv: number
}


type User = {
    name: string,
    age: number,
    email: string
    carddetails: cardDetails // using the combined type
}

const user : User = {
    name: "Jane",
    // age: "22", // Error: Type 'string' is not assignable to type 'number'.
    age: 22,
    email: "a@b.com",
    carddetails: {
        cardNumber: 1234567890,
        cardHolder: "Jane",
        expiryDate: "12/22",
        cvv: 123
    }
}

console.log(user);

//--------------------------------- interfaces ------------------------------------//

// combining interfaces
interface CardNumber {
    cardNumber: number
}
interface CardHolder {
    cardHolder: string
}
interface ExpiryDate {
    expiryDate: string
}
interface CardDetails extends CardNumber, CardHolder, ExpiryDate { // combining interfaces using extends
    cvv: number
}

interface User1 {
    name: string,
    age: number,
    email: string
    carddetails: CardDetails // using the combined interface
}

const user1 : User1 = {
    name: "Jane",
    // age: "22", // Error: Type 'string' is not assignable to type 'number'.
    age: 22,
    email: "es@cs.com",
    carddetails: {
        cardNumber: 1234567890,
        cardHolder: "Jane",
        expiryDate: "12/22",
        cvv: 123
    }
}

// console.log(user1);

//--------------------------------- classes ------------------------------------//

// class with constructor
class User2 {
    name: string;
    age: number;
    email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const user2 = new User2("Jane", 22, "jane@mane.com");
// console.log(user2);

// class with constructor and access modifier
class User3 {
    constructor(public name: string, public age: number, public email: string) { // public means the properties are initialized with the constructor itself
        // Empty constructor implementation for the above constructor so that the properties are initialized with the constructor itself 
    }
}

const user3 = new User3("Jane", 22, "mane@jane.com");
// console.log(user3);


//--------------------------------- Leve 2 Cource ------------------------------------//

const user4:{
    companyName: "Programming Hero", // type -> Literal types (only this value is allowed)
    readonly companyLocation: string, // type -> Readonly (cannot be changed)
    firstName: string,
    middleName?: string, // optional
    lastName: string,
    isMarried: boolean

} = {
    companyName: "Programming Hero",
    companyLocation: "Dhaka",
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMarried: true,
}
// user4.companyName = "Programming Hero"; // Error: Cannot assign to 'companyName' because it is a read-only property.

//--------------------------------- Up Level 2 Cource ------------------------------------//