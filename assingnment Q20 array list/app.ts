// Q20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let list :string[] = ["mount everst","jhelum river","JAPAN","TOKOYO","English","CARS"]

console.log(`A list containing these items.\n`);

let i=0
while (i<list.length) {
    console.log(list[i]);
    i++
    
}