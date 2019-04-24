'use strict';

//---------Exercises--------------//
//     Add jQuery code that will change the background color of a h1 element when clicked.

$('h1').click(function() {
    $(this).css('background-color', 'yellow');
});

//     Make all paragraphs have a font size of 18px when they are double clicked.

$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});

//     Set all li text color to red when the mouse is hovering, reset to black when it is not.

$('li').hover(
    function() {
    $(this).css('background-color', 'yellow');
},
    function() {
    $(this).css('background-color', 'lightgray');
});

//--------Exercises (end)--------//


var mooseQuotes = [
    "Be a moose.  Seriously.  It's great.",
    "If you ever see a moose in your garden, don't think it will attack you.  It probably just needs help with a computer problem as moose are not inherently tech-saavy.",
    "Behind every great man, is an angry moose, just getting ready to trample him.  Most of the time, those moose are invisible.",
    "I heart moose.",
    "Maybe moose are misunderstood.  Maybe my moose is miserable in the morning.  Majestic, magnificent, moose in mourning.",
    "Some moose look sad, but they are excellent at political machinations.  Withhold sympathy.",
    "Moose are the most delicate creatures imaginable, except that they are strong and scary, and they will kill you.",
    "My mother was a moose, but she got better.",
    "Moose moose moose moose cat? NO!!! Moose!"
];


$('#quote-random').text(mooseQuotes[(Math.floor(Math.random() * (mooseQuotes.length + 1)))]);

function randomQuotes() {
    console.log("You clicked my 'Moose Quotes' button!")
    $('#quote-random').text(mooseQuotes[(Math.floor(Math.random() * (mooseQuotes.length + 1)))]);
}

//
// $('#quote-button').click(randomQuotes);