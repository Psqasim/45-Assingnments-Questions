// Q24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let Name = "Qasim";
let nom = "tayyab";
let number= 10;
let number2=20;
let array = [10,1,3,4]
// • Tests for equality and inequality with strings
console.log(`Tests for equality and inequality with strings\n`);
console.log(`${Name==="Qasim"}`);
console.log(`${nom==="Qasim"}\n`);

// • Tests using the lower case function
console.log(`\nTests using the lower case function\n`);
console.log(`${Name.toLowerCase()}`==="qasim");
console.log(`${nom.toUpperCase()}`==="tayyab");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(`\nequality and inequality, greater than and less than\n`);
console.log(`${number}`<`${number2}`);
console.log(`${number}`>=`${number2}`);
console.log(`${number}`===`${10}`);
console.log(`${number}`===`${number2}\n`);

// • Tests using "and" and "or" operators
console.log(`\nTests using "and" and "or" operators\n`);
console.log((number>5)&&(number2>10));
console.log((number<5)||(number2<10));

// • Test whether an item is in a array
console.log(`\nTest whether an item is in a array\n`);
console.log(array.includes(10));
console.log(array.includes(99));


// • Test whether an item is not in a array
console.log(`\nTest whether an item is not in a array\n`);
console.log(!array.includes(18));
console.log(!array.includes(10));


