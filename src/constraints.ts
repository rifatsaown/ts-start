const addCourseToStudent = <T>(student:T, course:string): T & {course:string} => {
    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent<{name:string,age:number,email?:string}>({
    name:"Elie",
    age:25,
    email: "test@g.com"
}, "Math")

// Constraints
const addCourseToStudent2 = <T extends {name:string, age:number}>(student:T, course:string): T & {course:string} => {
    return {
        ...student,
        course
    }
}

const student2 = addCourseToStudent2({
    name:"Elie",
    age:25,
    // age:"25", // Error because of age type is not number 
}, "Math")

const student3 = addCourseToStudent2({
    name:"Elie",
    age:25,
    mobile: "01700000000" // No error because of mobile is not in constraints
}, "Math")





/*-------------- Generic Constraints With keyof Operator------------------- */

type Vehicle = {
    bike: string;
    car: string;
    truck: string;
};

type Owner = "bike" | "car" | "truck"; //Manually define the type

type Owner2 = keyof Vehicle; // Get the type from Vehicle type

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}

const vehicle: Vehicle = {
    bike: "Yamaha",
    car: "Toyota",
    truck: "Volvo"
}

// const bike = getProperty(vehicle, "Rifat"); // Error because of Rifat is not in Vehicle type
const bike = getProperty(vehicle, "bike"); // No Error because of bike is in Vehicle type

const vehicle2 = {
    model : "Toyota",
    year: 2020
}

const model = getProperty(vehicle2, "model"); // No Error because of model is in vehicle2 type

/*-------------- Generic Constraints With keyof Operator------------------- */

export { }; // To prevent error of variable redeclaration