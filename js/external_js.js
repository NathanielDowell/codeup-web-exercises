"use strict";

console.log("Hello, from external JavaScript!");

alert("Welcome to my website!");

var FavoriteColor = prompt("What's your favorite color?");
alert ("Oh, I suppose " + FavoriteColor + " is a nice color.");

console.log("Wow! " + FavoriteColor + " is my favorite color, too!!");

alert("WARNING!!! Your PC has be infected by RENT MOVIE VIRUS!  To clear virus, you must rent movies for your kids!!!!!");

alert("You must rent 'The Little Mermaid'!!!");
var Mermaid = prompt("How many day?!");
console.log(Mermaid + " day!");

alert("You must rent 'Brother Bear'!!!!!!");
var Bear = prompt("How many day?!");
console.log(Bear + " day!!");

alert("You must rent 'Hercules'!!!!!!!!!!!");
var Hercules = prompt("How many day??!!");
console.log(Hercules + " day!!!");

/*---Add "+" to convert to number: (var Hercules = +Hercules)------*/

var Hercules = parseInt(Hercules);
var Mermaid = parseInt(Mermaid);
var Bear = parseInt(Bear);
var costPerDay = 3;

var Extortion = (costPerDay * (Hercules + Mermaid + Bear));
console.log("The cost is $" + Extortion + "!!!!!!");

alert(("$3 per day!! You will be charge $") + (Extortion) + ("!!!!!!" ));
console.log("Muahahahahahahahaha!!!");

var CreditCard = prompt("Put Credit Card Number here!!  Or FBI come for you kids!!");
console.log(CreditCard);
var Exp = prompt("Expiration date?");
console.log(Exp);
var Security = prompt("Security code?");
console.log(Security);

alert("Thank you!  Enjoy your movies! :)");

alert("By the way, you shouldn't be so trusting.  Here is my new boat!");

/*-----------------------------------------------------------------*/

var googlePay = prompt ("How much does Google pay/hr?");
var amazonPay = prompt ("How much does Amazon pay/hr?");
var facebookPay = prompt ("How much does Facebook pay/hr?");

var googleHours = prompt("How many hours at Google?");
var amazonHours = prompt("How many hours at Amazon?");
var facebookHours = prompt("How many hours at Facebook?");

var totalPay = googlePay * googleHours;
totalPay += amazonPay * amazonHours;
totalPay += facebookPay * facebookHours;

alert("You made: $" + totalPay + " this week!")

/*-------------------------------------------------------*/

var classSize = confirm("Is the class currently full? If not, click Cancel.");
var classSchedule = confirm("Does the class conflict with current schedule?");
var enrollmentStatus = !(!classSize && !classSchedule);
alert("Student enrollment status: " + enrollmentStatus);

/*-----------------------------------------------------*/

var numberOfItems = prompt("How many items did you buy?");
var offerExpiration = comfirm("Is the offer valid?");
var membership = confirm("Are you a premium member?");

var couponStatus = (membership || Number(numberOfItems) > 2) && offerExpiration;
alert("Can customer use this offer?") + couponStatus;