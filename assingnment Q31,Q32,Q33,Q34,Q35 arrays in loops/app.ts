//Q31
// //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed

// Let's assume this is your array of users
let users: string[] = ['admin', 'user1', 'user2'];

// Check if the array is not empty
if (users.length > 0) {
    // If the array is not empty, remove all users
    users = [];
} else {
    // If the array is empty, print the message
    console.log('We need to find some users!');
}

// Check again if the array is empty
if (users.length === 0) {
    console.log('We need to find some users!');
}

console.log(`==============Q31END================`);

//Q32
let CurrentUSERS = ["tayyab", "qasim", "Aryan", "qayyum", "ali"];
let NewUSERS: string[] = ["fawad", "areeba", "Qasim", "Tayyab", "alina"];

NewUSERS.forEach(new_user => {
    // Convert both strings to lowercase to ensure the comparison is case insensitive
    const is_taken = CurrentUSERS.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());
    
    if (is_taken) {
        console.log(`The username "${new_user}" is already taken. Please choose a different username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
});


console.log(`==============Q32END================`);

//Q33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let numbers = [1,2,3,4,5,6,7,8,9];

for(let onenumber of numbers){
    let ordinalEnding:string;
    if (onenumber===1) {
        ordinalEnding="st"
    }
    else if (onenumber===2) {
        ordinalEnding="nd"
    }

    else if (onenumber===3) {
        ordinalEnding="rd"
    }
    else{
        ordinalEnding="th"
    }
    console.log(`${onenumber}${ordinalEnding}`);
}

console.log(`==============Q33END================`);
//Q34
// Array of favorite pizza names
let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print each pizza name using a for loop
let i =0
while (i<favoritePizzas.length) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
    i++;
}
// Additional sentence expressing love for pizza
console.log("Pizza is one of the best foods ever!");

console.log(`==============Q34END================`);
//Q35
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let PetAnimals = ["cat","rabbit","goat"];

for(let onePet of PetAnimals){
    console.log(`A ${onePet} would make a great pet!`);
}

console.log("Any Of these animals would make a great pet!");



console.log(`==============Q35END================`);