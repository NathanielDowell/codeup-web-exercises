'use strict';

function bananaFunc() {
    var i = 2;

    while (i <= 65536) {
        console.log(i);
        i = (i * 2);
    }
}

function sadConeSalesperson() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("I have to sell " + allCones + " cones before I am allowed to go home.");


    while (allCones > 0) {

        var conesPurchased = Math.floor(Math.random() * 5) + 1;

        if (conesPurchased > allCones) {
            console.log("Sorry, I only have " + allCones + ".");
            continue;
        } else if (conesPurchased === allCones) {
            console.log("You bought the last " + allCones + "! Brilliant!  I'm brilliant, and you're brilliant, and everybody's brilliant, and here are your cones, and I'm going HOME!");
        } else if (conesPurchased < allCones) {
            console.log("Thanks for giving me money for these " + conesPurchased + " cones.");
            console.log("*sigh*  I still have " + (allCones - conesPurchased) + " left to sell.");
        }
        allCones -= conesPurchased;

    }
}