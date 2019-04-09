/* Using a while loop:
- log all even numbers from 1 - 100
– create a function that returns the square of a number then return all squares from 1 -10
*/

var i = 1;

while (i <= 100) {

    if (i % 2 === 0) {
        console.log(i);
    }
        i++;
}



function squareOfNumber (a) {
    return a * a;
}

var i = 1;

while(i < 11) {
    console.log(squareOfNumber(i));
    i++;
}


// Do-While Loops

/* sophie [9:56 AM]
Using a do-while loop:
–    log “The number is <i>” for numbers 1-25
–    subtract by 10 from 100 until you reach -50. */

var i = 1;
do {
    console.log("The number is " + i + ".");
    i++;

} while(i <= 25);


var i = 100;

do {
    console.log(i);
    i -= 10;
} while (i >= -50);


// For Loops


//Fizzbuzz

/*Fizz Buzz: log all numbers from 1 - 100
–    if divisible by 3 log “Fizz"
–    if divisible by 5 log “Buzz"
–    if divisible by 3 and 5 log “FizzBuzz”
–    else, log the current number */

for (var i = 1; i < 100; i++) {

    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else console.log(i);
}

