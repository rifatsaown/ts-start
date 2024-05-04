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
