//Q44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich(...items:string[]){

    console.log("\nMaking a sandwhich with the following items:\n");
    items.forEach(singleItem=>
        console.log(singleItem)
        
    );
    console.log("\n\tNow Enjoy Sandwhich");
}

makeSandwich("BREAD","BUTTER");
makeSandwich("CHICKEN","CHEESE","EGG");
makeSandwich("BREAD","BUTTER","CHICKEN","TOMATO","CHEESE","EGG","MAYO");

console.log(`============Q44END=================`);

//Q45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


type Car = {
    manufacturer: string;
    model: string;
    [key: string]: string | number | boolean;
};

function manufacturer_car(manufacturer: string, model: string, ...options: string[]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        let [key, value] = option.split(":");
        key = key.trim();
        value = value.trim();

        // Try to parse the value as a number or boolean
        if (!isNaN(Number(value))) {
            car[key] = Number(value);
        } else if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
            car[key] = value.toLowerCase() === 'true';
        } else {
            car[key] = value;
        }
    });

    return car;
}


let myCar = manufacturer_car("Toyota", "Supra Mk4", "color: black", "sunroof: false", "year: 1993");
console.log(myCar);


console.log(`=======================Q45 END ============================`);
