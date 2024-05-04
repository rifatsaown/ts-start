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




export { }; // To prevent error of variable redeclaration