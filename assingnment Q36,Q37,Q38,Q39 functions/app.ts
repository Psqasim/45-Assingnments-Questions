//Q36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_shirt(size:string,printMessage:string) {

    console.log(`you selected ${size} size shirt with ${printMessage} prints on T shirt`);
    
}

make_shirt("small","Batman");

console.log(`================Q36End===============`);


//Q37
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function t_shirt(size:string="large",printMessage:string="i love typeScript") {

    console.log(`creating a ${size} size shirt with ${printMessage} prints on T shirt`);
    
}

t_shirt();
t_shirt("medium");
t_shirt("small","supra")

console.log(`================Q37End===============`);

// Q38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string,country:string="Pakistan") {

    console.log(`${city} is in ${country}`);
    
}
describe_city("karachi");
describe_city("sargodha");
describe_city("tokoyo","japan");

console.log(`================Q38End===============`);

//Q39
// //City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string,country:string):string {

    return `${city},${country}`
    
}

console.log(city_country("khi","Pakistan"));
console.log(city_country("tokyo","Japan"));
console.log(city_country("moscow","Russia"));

console.log(`================Q39End===============`);