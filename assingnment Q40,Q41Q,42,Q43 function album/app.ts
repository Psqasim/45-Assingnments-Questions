//Q40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist_name:string,album_title:string,tracks?:number) {
    let album : {artist:string,title:string,tracks?:number} = {
        artist: artist_name,
        title:album_title,
    };

    if(tracks !== undefined){
        album.tracks=tracks
    }
    return album;

}

let ans=make_album("ALLAMA IQBAL","Zarb-i Kalim")
let ans1=make_album("Lewis Carrol","Alice in Wonderland")
let ans2=make_album("Chaucer","Canterbury Tales",3)
console.log(ans);
console.log(ans1);
console.log(ans2);

console.log(`===========Q40 END==============`);

//Q41
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magician:string[]){
  
    magician.forEach(name=> console.log(name)
    );
}

let magician_name = ["qasim","tayyab","qayyum","aryan"]

show_magicians(magician_name);

console.log(`===========Q41 END==============`);

//Q42
//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians1(show_magicians1:string[]){
  
    show_magicians1.forEach(name=> console.log(name)
    );
}

function make_great(magicians:string[]){
    return magicians.map(name=>`the great magicains ${name}`)
}
let magician_name1 = ["qasim","tayyab","qayyum","aryan"]

let great = make_great(magician_name1);

show_magicians1(great);


console.log(`===========Q42 END==============`);

//Q43
//Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function show_magicians2(show_magicians2:string[]){
  
    show_magicians2.forEach(name=> console.log(name)
    );
}

function make_great2(magicians:string[]){
    return magicians.map(name=>`the great magicains ${name}`)
}
let magician_name2 = ["qasim","tayyab","qayyum","aryan"];

let copy_magicainName = magician_name2.slice();

let copyGreat2 = make_great2(copy_magicainName);

console.log("\n\torginal array\n\t");
show_magicians2(magician_name2)

console.log("\n\tcopied array\n\t")
show_magicians2(copyGreat2);

console.log(`===========Q43 END==============`);