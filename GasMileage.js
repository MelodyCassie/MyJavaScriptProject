let prompt = require('prompt-sync')();

let stopper = 0;
let sum = 0;
while (stopper!==-1){

    let milesDriven = prompt('Enter mileage driven: ');
    let gallonsUsed = prompt('Enter mileage driven: ');


    let milesPerGallon= milesDriven/gallonsUsed;
    console.log("The miles per gallon used is: " + milesPerGallon)
    sum += milesPerGallon
    console.log("The total of miles per gallon is " + sum);
    let average = sum/2.0;
    console.log("The average is " + average);
}
