interface IDeveloper<T,X = null> {
    name : string;
    computer : {
        brand : string;
        model : string;
        processor : string;
    }
    smartWatch : T;
    bike ?: X
}


const richDeveloper : IDeveloper<{
    brand : string;
    model : string;
    color : string;
},{
    brand : string;
    model : string;
    color : string;
}> = {
    name : "Elie",
    computer : {
        brand : "Apple",
        model : "Macbook Pro",
        processor : "M2 Pro"
    },
    smartWatch : {
        brand : "Apple",
        model : "Apple Watch Series 7",
        color : "Black"
    },
    bike : {
        brand : "BMW",
        model : "S 1000 RR",
        color : "Red"
    }
}

const poorDeveloper : IDeveloper<{
    brand : string;
    model : string;
    color : string;
    sleepTracker : boolean;
}> = {
    name : "Joel",
    computer : {
        brand : "Dell",
        model : "Inspiron 15",
        processor : "Intel Core i5"
    },
    smartWatch : {
        brand : "Xiaomi",
        model : "Mi Band 6",
        color : "Black",
        sleepTracker : true
    }
}