//Q18
//Seeing the World: Think of at least five places in the world you’d like to visit.


// • Store the locations in a array. Make sure the array is not in alphabetical order.
let dream : string[]= ["SAUDIA ARABIA","JAPAN","CHINA","USA","RUSSIA"]

//Print your array in its original order.

console.log(`orginal order :${dream}\n`);

//• Print your array in alphabetical order without modifying the actual list.

console.log(`alphabetical order:${[...dream].sort()}\n`);

//• Show that your array is still in its original order by printing it.

console.log(`original order: ${dream}\n`);

//• Print your array in reverse alphabetical order without changing the order of the original list.

console.log(`reverse alphabetical order without changing the order: ${[...dream].sort().reverse()}\n`);


//• Show that your array is still in its original order by printing it again.

console.log(`orginal order :${dream}\n`);


//• Reverse the order of your list. Print the array to show that its order has changed.

console.log(` Reverse the order of your list: ${[...dream].reverse()}\n`);


//• Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log(` Reverse the order of your list: ${[...dream].reverse()}\n`);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log(`alphabetical order: ${dream.sort()}\n`);

//.sort for arrangements just like a b c
//.reverse for just like z y x


//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


console.log(`alphabetical order:${dream.sort().reverse()}\n`);
