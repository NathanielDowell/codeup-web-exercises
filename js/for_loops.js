"use strict";

function showMultiplicationTable(num) {
    for (i = 1; i <= 10; i++)
        console.log(num + " x " + i + " = " + (num * i));
}

/*

This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

Use a for loop and the code from the previous lessons to generate 10 random
numbers between 20 and 200 and output to the console whether each number is
odd or even. For example:
123 is odd
80 is even

*/


    for (var i = 1; i <= 10; i++) {
    var run = (Math.floor(Math.random() * 182) + 20);

        if (run % 2 === 0) {
            console.log(run + " is even.");
        } else console.log(run + " is odd.");

}

  // The Infernal Pyramid Problem can be solved in multiple ways...
// First, by concatenating somehow.

    var x = "";
    for (var i = 1; i <= 9; i++) {

        x = x + "1";
        console.log(i * x)
    }

    //Below, I'm working on a solution that uses nested for loops.

    for (var i = 1; i <= 9; i++) {

        console.log(i)
    }

    for (var i = 100; i >= 5; i--) {
        if (i % 5 === 0) {
            console.log(i);
        }
}

