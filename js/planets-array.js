(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    console.log(planets.toString());

    console.log(planets.unshift("The Sun"));
    console.log(planets.toString());
    console.log("The sun is the reason for the SOLAR system.")

    console.log(planets.push("Pluto"));
    console.log(planets.toString());
    console.log("Ha! We have made Pluto a planet!")

    console.log(planets.shift());
    console.log(planets.toString());
    console.log("Goodbye to our bright, shining star.")

    console.log(planets.pop());
    console.log(planets.toString());
    console.log("Revolve in peace, Pluto...")

    console.log(planets.indexOf("Earth"));
    console.log("finding the index of Earth")

    console.log(planets.reverse());
    console.log(planets.toString());
    console.log("The order is now backwards!")

    console.log(planets.sort());
    console.log(planets.toString());
    console.log("Now that we've got that sorted...")
})();
