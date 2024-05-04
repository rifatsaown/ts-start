// const rollNumber: number[] = [3, 4, 5];
const rollNumber: Array<number> = [3, 4, 5];

// const mentors: string[] = ['Elie', 'Matt', 'Joel'];
const mentors: Array<string> = ['Elie', 'Matt', 'Joel'];

type GenericType<T> = Array<T>;// Generic type

const rollNumber2: GenericType<number> = [3, 4, 5];
const mentors2: GenericType<string> = ['Elie', 'Matt', 'Joel'];


interface IPerson {
    name: string;
    age: number;
}

const user: GenericType<IPerson> = [
    { name: 'Elie', age: 25 },
    { name: 'Matt', age: 35 },
    { name: 'Joel', age: 30 },
]


type GenericTuple<X,Y> = [X,Y] // Generic Tuple

const manus:GenericTuple<string,string> = ["Mr. X", "Mr. Y"]
const userWithId:GenericTuple<number,{name:string,age:number}> = [1, { name: 'Elie', age: 25 }]


export { }; // To prevent error of variable redeclaration
