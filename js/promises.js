"use strict";

//Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds

// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// function wait(number){
//     const newTigerBunny = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//             reject();
//         }, number);
//     });
//     return newTigerBunny
//
// }
// wait(1000).then((ms) => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// Create a function that accepts a github username, and returns a promise that
// resolves with the date of the last commit that user made.
//

// Promise.resolve('one').then((one)=>{
//     console.log(one);
//     return 'two';
// }).then((two)) => {
//     console
// }

//========= Fetch API ==========//

// jQuery AJAX request example

// $.ajax('url')
//     .done(function(data){
//         console.log(data);
//     })
//     .fail(function(jqXHR, message){
//         console.log(message);
//     });
//
// fetch('https://swapi.co/api/people/1')
//     .then((response) => {
//     return response.json();
// }) .then(console.log);

// GitHub Access Token: 5ef92d5cb317b423bb0ecfb4380ebd9842d661c5

function lastCommitDate(user) {

fetch('https://api.github.com/users/' + user + '/events/public', {headers: {'Authorization': 'token 5ef92d5cb317b423bb0ecfb4380ebd9842d661c5'}}) //retrieves the data
//.then() calls the data back in a variable, which we named data,
    //within the .then parentheses, we add a function--> data=> data.json(), which translates the data into something we can use (JSON format)
    .then(data => data.json())
    // Now that the data is in a useful format, we continue with another .then()
    // in order to grab only the data we want, which is the date of the latest commit.
    // Within the .then parentheses, we pass another function, which takes the data and uses the data.find() method.
    // Within the .find parentheses, we create and define a new variable to grab the FIRST occurrence of
    // the event.type we specify, which is 'PushEvent' (spelling MUST match what's given in the object data):
    .then(data => data.find(event => event.type === 'PushEvent'))
    // Now that we've isolated the first, and therefore latest, PushEvent, we can use another .then()
    // to make a final function which grabs the date from the PushEvent (data.created_at) and stores it in the variable pushEvent
    // and then uses .substring() to isolate components of the date string to put them into a more readable format
    // which can then be concatenated and console logged.
    .then(data => {
        let pushEvent = data.created_at;
        let year = pushEvent.substring(0,4);
        let month = pushEvent.substring(5,7);
        let day = pushEvent.substring(8,10);
        console.log(month + "-" + day +"-" + year);
    });
}

lastCommitDate("NathanielDowell");

// function makeRequest() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => )
//     })
// }

// .then(function lastCommit(userName) {)

// }


