type UserA = {
    name: string;
    age: number;
}
type UserWithRole = UserA & { role: string };
const userA : UserWithRole = {
    name: "John",
    age: 30,
    role: "Admin"
}


interface IUserB {
    name: string;
    age: number;
}

interface IUserWithRole extends IUserB {
    role: string;
}

const userB : IUserWithRole = {
    name: "John",
    age: 30,
    role: "Admin"
}

// Array Type Annotation
interface IRoll {
    [key: number]: number;
}

const roll : IRoll = [1,2,3,4,5]; // Interface Index Signature

const roll2 : number[] = [1,2,3,4,5]; 

console.log(roll[0]);
// Array Type Annotation 