//Q44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...items) {
    console.log("\nMaking a sandwhich with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\n\tNow Enjoy Sandwhich");
}
makeSandwich("BREAD", "BUTTER");
makeSandwich("CHICKEN", "CHEESE", "EGG");
makeSandwich("BREAD", "BUTTER", "CHICKEN", "TOMATO", "CHEESE", "EGG", "MAYO");
console.log(`============Q44END=================`);
function manufacturer_car(manufacturer, model, ...options) {
    let car = {
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
        }
        else if (value.toLowerCase() === 'true' || value.toLowerCase() === 'false') {
            car[key] = value.toLowerCase() === 'true';
        }
        else {
            car[key] = value;
        }
    });
    return car;
}
let myCar = manufacturer_car("Toyota", "Supra Mk4", "color: black", "sunroof: false", "year: 1993");
console.log(myCar);
console.log(`=======================Q45 END ============================`);
export {};
