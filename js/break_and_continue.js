"use strict";

var userNumber = prompt("Giveth the odd number.");

for (i = 1; i < 50; i++) {

    if (i === +userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
    } else if (i % 2 === 1) {
        console.log ("Here is an odd number: " + i);
    }
}