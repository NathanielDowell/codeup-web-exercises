"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

    if (confirm("Would it please the Master to enter a number?")) {
        console.log("It pleases the master!");
        var number = prompt("Please give us a number, nice Master!");

        if (isNaN(number)) {
            number = prompt("Apologies, nice Master, but we needs a number...");
            console.log("Master toys with us.");
        } else console.log(number = +number);

        if (number == 0) {
            console.log("This number is the number of desolation.");
            alert("Master, zero leaves us empty inside.");
        } else if((number < 0) || (number > 0)) {

            console.log("The Master is so smart, knowing such a number!")
            alert("Oh, " + number + " is an excellent choice, Master!");

            if (number % 2 == 1) {
                console.log("Master's number is odd.");
                alert("You have given us an ODD number, Master!");
            } else {
                console.log("Master's number is even.");
                alert("You have given us an EVEN number, Master!")
            }

            if (number >= 1) {
                console.log("This is a happy number.");
                alert("Master, your number is POSITIVE!");
            } else {
                console.log("This is a sad number.");
                alert("Master, your number is NEGATIVE.");
            }

            console.log("Master sees our soul...perhaps Master wishes us to perform additional magic...");

            var plus100 = (number + 100);
            console.log("Not enough fingers...")
            console.log("Oh!  Master's number, plus 100, is " + plus100 + "!!");
            alert("Master!  If we add 100 to your number, we get " + plus100 + "!");


            if (confirm("If the Master is pleased, might we have some pets?")) {
                console.log("Aaaaah.  We loves the pets.");
            } else {
                console.log("We have troubled the Master.");
                alert("Sorry to have bothered you, nice Master...");

            }
        }

    } else {
        console.log("The master is angry with us.");
    }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that is related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(userColor) {
    if(userColor == "blue") {
        return "Blue is the color of my inside.";
    } else if(userColor == "green") {
        return "Green is the color of the leaf I had in my pocket when I was 5, but not the leaf you're thinking about.  The other one.";
    } else if(userColor == "yellow") {
        return "Yellow is our happy little sun that, without constant vigilance, will cheerfully murder you with its radiation.";
    } else if(userColor == "red") {
        return "Red is the color of my angry pants.";
    } else if(userColor == "violet") {
        return "Purple is my wife's favorite color.";
    } else if(userColor == "orange") {
        return "Orange. Really?";
    } else if(userColor == "indigo") {
        return "Who, besides a poet or artist, uses the word \"Indigo\"?";
    } else {
        return "Meh. I don't care for your answer.";
    }
}

analyzeColor("red");

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var switchColor = prompt("Choose a color.");

switch (switchColor){
    case "red":
        console.log("Red is the color of my RAGE!!!");
        break;
    case "orange":
        console.log("Orange is the color of oranges, or potatoes (painted orange).");
        break;
    case "yellow":
        console.log("Yellow is for nerds.");
        break;
    case "green":
        console.log("Green is so photosynthesis.");
        break;
    case "blue":
        console.log("Blue skies...smilin' at me...");
        break;
    case "indigo":
        console.log("My name is Indigo Montoya.  You killed my father.  Prepare to die.");
        break;
    case "violet":
        console.log("Violets beget violets.");
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var pickyColor = (analyzeColor(prompt("Provide for me yet another color.")));

alert(pickyColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1, you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//var cartTotal = 100;

//function calculateTotal(luckyNumber, cartTotal) {

//    switch (luckyNumber) {
//         case ("0"):
//             return (cartTotal);
//             break;
//         case ("1"):
//             return (cartTotal - (cartTotal * .10));
//         break;
//         case ("2"):
//             return (cartTotal - (cartTotal * .25));
//             break;
//         case ("3"):
//             return (cartTotal - (cartTotal * .35));
//             break;
//         case ("4"):
//             return (cartTotal - (cartTotal * .5));
//             break;
//         case ("5"):
//             return (cartTotal - cartTotal);
//
//     }
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var cartTotal = 100;

function calculateTotal(luckyNumber, cartTotal) {

    switch (luckyNumber) {
        case ("0"):
            return (cartTotal);
            alert("Your total is $" + cartTotal + ", and you saved" )
            break;
        case ("1"):
            return (cartTotal - (cartTotal * .10));
            break;
        case ("2"):
            return (cartTotal - (cartTotal * .25));
            break;
        case ("3"):
            return (cartTotal - (cartTotal * .35));
            break;
        case ("4"):
            return (cartTotal - (cartTotal * .5));
            break;
        case ("5"):
            return (cartTotal - cartTotal);

    }
}