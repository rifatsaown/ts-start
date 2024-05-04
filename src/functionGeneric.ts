const createArray = (param:string): string[] => {
    return [param]
}

const createArrayWithGeneric = <T>(param:T): T[] => {
    return [param]
}

const res1 = createArray("Bangladesh")
const resGeneric = createArrayWithGeneric<string>("Bangladesh")

const resGenericObj = createArrayWithGeneric<{
    name:string, age:number
}>({
    name:"Bangladesh", age:50
})


const createArrayWithTuple = <X,Y>(param1:X, param2:Y): [X,Y] => {
    return [param1, param2]
}

const resTuple = createArrayWithTuple<string, number>("Bangladesh", 50)
const resTupleObj = createArrayWithTuple<number, {name:string, age:number}>(50, {name:"Bangladesh", age:50})




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
