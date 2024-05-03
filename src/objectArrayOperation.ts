// learn spread operator

const bros1 : string[] = ['Groucho', 'Harpo', 'Chico'];
const bros2 : string[] = ['Zeppo', 'Gummo'];

// bros1.push(bros2); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'.
bros1.push(...bros2);

const mentors1 ={
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Rakib"
}

const mentors2 ={
    prizma: "Firoz",
    next : "Tonmoy",
    cloud : "Nahid"
}

const allMentors = {...mentors1, ...mentors2};


// Learn Rest operator

const greetFriends = (...friends : string[]) => {
    friends.forEach(friend => {
        console.log(`Hi ${friend}`);
    });
}

greetFriends('Mezba', 'Mir', 'Rakib', 'Firoz', 'Tonmoy', 'Nahid');
