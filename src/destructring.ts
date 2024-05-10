// Object Destructuring
interface IUser {
    id: number;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    contactNo: string;
    address: {
        city: string;
        country: string;
    };
}

const user = {
    id : 1,
    name : {
        firstName : "Md Rifat",
        middleName : "Hossen",
        lastName : "Saown"
    },
    contactNo : "01700000000",
    address : {
        city : "Dhaka",
        country : "Bangladesh"
    },
};

const {
    name: {middleName : midName}, 
    address
} = user;


// Array Destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, , fourth,...rest] = numbers;


export { }; // To avoid "Cannot redeclare block-scoped variable" error

