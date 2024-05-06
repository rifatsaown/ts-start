const addFunction = (a: number|string, b: number|string): number|string => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }else{
        a = a.toString();
        b = b.toString();
        return a + b;
    }
}
console.log(addFunction(2, 3)); // 5
console.log(addFunction('Hello', 'World')); // HelloWorld
console.log(addFunction(2, 'World')); // 2World
// In the above example, we have used the typeof operator to check the type of the arguments passed to the function.


// In Guard 
type NormalUser = {
    name: string;
    age: number;
};
type AdminUser = {
    name: string;
    age: number;
    role: "admin";
};

const displayUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) { // Type Guard
        console.log(user.role);
    } else {
        console.log(user.name);
    }
};