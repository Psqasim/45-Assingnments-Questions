// Q21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


//for interface use to object make to type etc string,number which u add

interface type {
    favouriteCar : string
    model:number
    country:string
    type:string
}

let object:type ={
    favouriteCar: "SupraMk4",
    model:1993,
    country:"JAPAN",
    type:"JDM(JAPAN DOMESTIC MARKET)"
}

console.log(`FAVOUTITE CAR MODEL\n`);
console.log(`MY FAVOURITE CAR IS ${object.favouriteCar}\n`);
console.log(`MODEL OF THE YEAR IS ${object.model}\n`);
console.log(`MADE IN ${object.country}\n`);
console.log(`IS ALSO CALLED ${object.type}MODEL\n`);

//Q22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


let error :string[]=["qasim","haji","tayab","haseeb"]

console.log(`eoror make line\n`);
console.log(`${error[4]}\n`);
console.log(`correct make eror\n`);
console.log(error[3]);




