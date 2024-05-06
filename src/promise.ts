// Simulate a promise that resolves after 1 second
const createPromise = (value: string) => {
    return new Promise<string>((resolve, reject) => {
       const data : string = value;
       if(data){
           resolve(data);
       }else{
              reject("Data not found");
       }
    });
}

// Use the promise
const usePromise = async () : Promise<string> => {
    const data = await createPromise("data nai");
    return data;
}

usePromise().then(data => {
    // console.log(data);
}).catch(error => {
    // console.log(error);
})


//------------ Json Placeholder API ------------//
type Posts = Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
}>

const getPosts = async ():Promise<Posts> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    return data;
}

getPosts()
