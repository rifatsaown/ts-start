const isAuthenticated = null;

const result = isAuthenticated ?? "Guest";

console.log({ result});


interface IUser {
    name: string;
    age: number;
    address: {
        presentAddress: string;
        permanentAddress?: string;
    };
}
const user: IUser = {
    name: "John",
    age: 25,
    address: {
        presentAddress: "Dhaka",
    },
};

const permanentAddress = user?.address?.permanentAddress ?? "Not Available"; // Nullish Coalescing
console.log({ permanentAddress });



export {}