console.log("The trees follow me with their hearts.");


// ## Problem 1
//
// Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
//
//     Example input:
//
//     ```js
// ["fred", true, 5, 3]
// ```
//
// Example output:
//
//     ```js
// [3, 5]
// ```

var input= ["fred", true, 5, 3, 12];

function filterNumbers(arr) {
    var output = [];

    for (var i = 0; i < arr.length; i +=1) {
        if (arr[i] === "number") {
            output.push(arr[i]);
        }
    }

    //How to sort numbers in chronological order:
    output.sort(function(a,b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    return output;
};

console.log(filterNumbers(input));
//
// ## Problem 2
//
// Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js

// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];
// ```

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

//this function mutates the input, so it has a "side-effect" and is an "impure function"
function getOlder(dogs) {
      dogs.forEach(function(dog) {
          dog.age += 1;
      });
}

console.log(dogs[0].age);
console.log(dogs[1].age);
console.log(dogs[2].age);


getOlder(dogs);


// ## Problem 3
//
// Write a function, ```washCars```, that takes in a array of car objects and sets the boolean properties of ```isDirty``` to ```false```. Again, no return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js
// [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: true
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: true
//     }
// ]
// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: false // changed to false
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false // stays the same
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: false // changed to false
//     }
// ]
// ```





// ## Problem 4
//
// Write a function, ```adminList``` that takes in an array of user objects and returns a count of all admins based on the ```isAdmin``` property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//     Example Input:
//
//     ```js
// [
//     {
// 		isAdmin: true,
// 		email: 'user1@email.com'
//     },
//     {
// 		isAdmin: true,
// 		email: 'user2@email.com'
//     }
//     {
//     	isAdmin: false,
//     	email: 'user3@email.com'
//     }
// ];
// ```
//
// Example Output (before refactor):
//
// ```js
// 2
// ```
//
// Example Output (after 1st refactor):
//
// ```js
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
// ```
//
// Example Output (after 2nd refactor):
//
// ```js
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
// ```





// ## Problem 5
//
// Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.
//
//     Example Input:
//
//     ```js
//
// makeSandwhichObjects(breads, fillings) // example call to the function
// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]
// ```

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwichObjects(breads, fillings) {
    var output = [];
    for (var i = 0; i < breads.length; i += 1) {
        output.push({
            bread: breads[i],
            filling: filling[i]
        });
    }
    return output;
}



// ## Problem 6
//
// Create a function, ```firstLettersOfStringProps```, that takes in an object and returns an array of first letters for each property that is a string.
//
//     Example Input:
//
//     ```js
// {
// 	propA: true,
// 	propB: "hello"
// 	propC: 23,
// 	propD: "world"
// }
// ```
//
// Example Output:
//
//     ```js
// ['h', 'w']
// ```





// ## Problem 7
//
// Create a function, ```returnBasicUserData```, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a ```name``` and ```age``` property. The function will return a new array of objects that contain only ```name``` and ```age	``` properties and values from the input array of user objects.
//
//     Example Input:
//
//     ```js
// [
// 	{
// 		name: "Fred Smith",
// 		favColor: "Blue",
// 		age: 25
// 	{,
// 	{
// 		name: "Sally Smith",
// 		favPet: "Dogs",
// 		isAdmin: true,
// 		age: 37
// 	{,
// 	{
// 		phoneNumber: "5552759898",
// 		name: "Karen Smith",
// 		age: 19
// 	{
// ]
//
// ```
//
// Example Output:
//
//     ```js
// [
// 	{
// 		name: "Fred Smith",
// 		age: 25
// 	{,
// 	{
// 		name: "Sally Smith",
// 		age: 37
// 	{,
// 	{
// 		name: "Karen Smith",
// 		age: 19
// 	{
// ]
//
// ```





// ## Problem 8
//
// Create a function, ```returnCharCount```, that takes in an array or an object and will return the total number of characters for any string elements or string properties.
//
//     Example 1 Input:
//
//     ```js
// ['hello', true, 25, null, undefined, '', 'world']
// ```
//
// Example 1 Output:
//
//     ```js
// 10
// ```
//
// Example 2 Input:
//
//     ```js
// {
// 	someProp1: true,
// 	someProp2: null,
// 	someProp3: "hello",
// 	someProp4: 88,
// 	someProp5: "world"
// }
// ```
//
// Example 2 Output:
//
//     ```js
// 10
```
# Second JavaScript Assessment Study Problems

## Problem 1

Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
        
Example input: 

```js
    ["fred", true, 5, 3]
    ```

Example output: 

```js
    [3, 5]
    ```

## Problem 2

Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.

Example Input:

```js
    [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ];
```

Example Output: 

```js
    [
    {
        name: "Chompers",
        breed: "Pug",
        age: 8
    },
        {
            name: "Freddy",
            breed: "Lab",
            age: 5
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 11
        }
    ];
```
    
## Problem 3

Write a function, ```washCars```, that takes in a array of car objects and sets the boolean properties of ```isDirty``` to ```false```. Again, no return value is needed since the original array of objects will be changed by this function.
       
Example Input:

```js
    [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]
    ```
       
Example Output:

```js
    [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: false // changed to false
    },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false // stays the same
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: false // changed to false
        }
    ]
    ```

## Problem 4
        
Write a function, ```adminList``` that takes in an array of user objects and returns a count of all admins based on the ```isAdmin``` property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

Example Input:

```js
    [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
        {
            isAdmin: true,
            email: 'user2@email.com'
        }
{
    isAdmin: false,
        email: 'user3@email.com'
}
];
```

Example Output (before refactor):  

```js
2
    ```

Example Output (after 1st refactor): 

```js
    [
    'user1@email.com',
        'user2@email.com'
    ]
    ```

Example Output (after 2nd refactor): 

```js
    [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
        {
            isAdmin: true,
            email: 'user2@email.com'
        }
    ]
    ```

## Problem 5

Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.

Example Input:

```js
var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

makeSandwhichObjects(breads, fillings) // example call to the function
    ```

Example Output: 

```js
    [
    {
        bread: "white,
        filling: "pb&j"
    },
        {
            bread: "wheat",
            filling: "ham"
        },
        {
            bread: "rhy",
            filling: "cheese steak"
        },
        {
            bread: "white",
            filling: "tuna"
        }
    ]
    ```

## Problem 6

Create a function, ```firstLettersOfStringProps```, that takes in an object and returns an array of first letters for each property that is a string.

Example Input:

```js
{
    propA: true,
        propB: "hello"
    propC: 23,
        propD: "world"
}
```

Example Output:

```js
    ['h', 'w']
    ```

## Problem 7

Create a function, ```returnBasicUserData```, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a ```name``` and ```age``` property. The function will return a new array of objects that contain only ```name``` and ```age	``` properties and values from the input array of user objects.

Example Input:

```js
    [
    {
        name: "Fred Smith",
        favColor: "Blue",
        age: 25
{,
    {
        name: "Sally Smith",
            favPet: "Dogs",
        isAdmin: true,
        age: 37
        {,
            {
                phoneNumber: "5552759898",
                    name: "Karen Smith",
                age: 19
                {
                ]

                    ```

Example Output:

```js
                    [
                    {
                        name: "Fred Smith",
                        age: 25
                    {,
                        {
                            name: "Sally Smith",
                                age: 37
                            {,
                                {
                                    name: "Karen Smith",
                                        age: 19
                                    {
                                    ]

                                        ```

## Problem 8

Create a function, ```returnCharCount```, that takes in an array or an object and will return the total number of characters for any string elements or string properties.

Example 1 Input:

```js
                                        ['hello', true, 25, null, undefined, '', 'world']
                                        ```

Example 1 Output:

```js
                                        10
                                            ```

Example 2 Input:

```js
                                        {
                                            someProp1: true,
                                                someProp2: null,
                                            someProp3: "hello",
                                            someProp4: 88,
                                            someProp5: "world"
                                        }
                                        ```

Example 2 Output:

```js
                                        10
                                            ```
Collapse




:laptop-parrot:
2



Carson Belew2:14 PM
Here is your Pod Standup Schedule for this week:

Thursday 4/18 (Location: 6th Floor Conf. Room)

What About Bob? - 4:05
The Groundhogs - 4:07
Ghostbusters - 4:14
Space Jam - 4:21
Where the Buffalo Roam - 4:28
Life Aquatic - 4:35
Charlie's Angels - 4:42
This will be the last standup for this round of pods, so be prepared to show what you've worked on :slightly_smiling_face:. A new poll will be sent out and new pods assigned for jQuery -> JSII

:dk-kart:
1

:dab-squidward:
1

:confused_parrot:
1

:+1::skin-tone-5:
1


Carson Belew3:55 PM
Saw this on Geekdom, sharing it here:squid-dab:
3:55 PM
https://geekdomsa.slack.com/archives/C034CFRLL/p1555574980013200

Terrell S.4:24 PM
https://docs.google.com/forms/d/e/1FAIpQLSdKniPiCYeALwwiD-zsN2Q95cvVXk1T8Kg7Yrab6SsH0In8XQ/viewform?usp=sf_link

:terrell:
1

:memo:
1

4:25 PM
Happy friday @channel please get the survey filled out!
Today

jreich58:56 AM
Possible Solutions to Practice Assessment Problems 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Study Hall</title>
</head>
<body>


<script>
    "use strict";

// # Second JavaScript Assessment Study Problems
//
// ## Problem 1
//
// Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
//
//     Example input:
//
//     ```js
// ["fred", true, 5, 3]
// ```
//
// Example output:
//
//     ```js
// [3, 5]
// ```

                                        // function filterNumbers(arr) {
                                        //     var outputArr = [];
                                        //     for (var i = 0; i < arr.length; i += 1) {
                                        //         console.log(typeof arr[i]);
                                        //         if (typeof arr[i] === "number") {
                                        //             outputArr.push(arr[i]);
                                        //         }
                                        //     }
                                        //     return outputArr.sort(function(a, b) {
                                        //         if (a > b) {
                                        //             return 1;
                                        //         } else if (a < b) {
                                        //             return -1;
                                        //         } else {
                                        //             return 0;
                                        //         }
                                        //     });
                                        // }
                                        //
                                        // console.log(filterNumbers(["fred", true, 5, 3, 12])); // [3, 5]


//
// ## Problem 2
//
// Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js
// [
// {
//     name: "Chompers",
//     breed: "Pug",
//     age: 7
// },
// {
//     name: "Freddy",
//     breed: "Lab",
//     age: 4
// },
// {
//     name: "Mr. Pig",
//     breed: "Mastif",
//     age: 10
// }
// ];
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     name: "Chompers",
//     breed: "Pug",
//     age: 8
// },
// {
//     name: "Freddy",
//     breed: "Lab",
//     age: 5
// },
// {
//     name: "Mr. Pig",
//     breed: "Mastif",
//     age: 11
// }
// ];
// ```

                                        // var dogs =  [
                                        // {
                                        //     name: "Chompers",
                                        //     breed: "Pug",
                                        //     age: 7
                                        // },
                                        // {
                                        //     name: "Freddy",
                                        //     breed: "Lab",
                                        //     age: 4
                                        // },
                                        // {
                                        //     name: "Mr. Pig",
                                        //     breed: "Mastif",
                                        //     age: 10
                                        // }
                                        // ];
                                        //
                                        // function getOlder(dogs) {
                                        //     dogs.forEach(function(element) {
                                        //         element.age += 1;
                                        //     });
                                        // }
                                        //
                                        // getOlder(dogs);
                                        //
                                        // dogs.forEach(function(dog) {
                                        //     console.log(dog.age);
                                        // });

//
// ## Problem 3
//
// Write a function, ```washCars```, that takes in a array of car objects and sets the boolean properties of ```isDirty``` to ```false```. Again, no return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js
// [
// {
//     make: 'Volvo',
//     color: 'red',
//     year: 1996,
//     isDirty: true
// },
// {
//     make: 'Toyota',
//     color: 'black',
//     year: 2004,
//     isDirty: false
// },
// {
//     make: 'Ford',
//     color: 'white',
//     year: 2007,
//     isDirty: true
// }
// ]
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     make: 'Volvo',
//     color: 'red',
//     year: 1996,
//     isDirty: false // changed to false
// },
// {
//     make: 'Toyota',
//     color: 'black',
//     year: 2004,
//     isDirty: false // stays the same
// },
// {
//     make: 'Ford',
//     color: 'white',
//     year: 2007,
//     isDirty: false // changed to false
// }
// ]
// ```

                                        // var cars = [
                                        // {
                                        //     make: 'Volvo',
                                        //     color: 'red',
                                        //     year: 1996,
                                        //     isDirty: true
                                        // },
                                        // {
                                        //     make: 'Toyota',
                                        //     color: 'black',
                                        //     year: 2004,
                                        //     isDirty: false
                                        // },
                                        // {
                                        //     make: 'Ford',
                                        //     color: 'white',
                                        //     year: 2007,
                                        //     isDirty: true
                                        // }
                                        // ];
                                        //
                                        // function washCars(cars) {
                                        //     cars.forEach(function(car) {
                                        //         if (car.isDirty === true) {
                                        //             car.isDirty = false;
                                        //         }
                                        //     });
                                        // }
                                        //
                                        // cars.forEach(function(car) {
                                        //     console.log(car.isDirty);
                                        // });
                                        //
                                        // washCars(cars);
                                        //
                                        // cars.forEach(function(car) {
                                        //     console.log(car.isDirty);
                                        // });

// ## Problem 4
//
// Write a function, ```adminList``` that takes in an array of user objects and returns a count of all admins based on the ```isAdmin``` property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//     Example Input:
//
//     ```js
// [
// {
//     isAdmin: true,
//     email: 'user1@email.com'
// },
// {
//     isAdmin: true,
//     email: 'user2@email.com'
// }
// {
//     isAdmin: false,
//     email: 'user3@email.com'
// }
// ];
// ```
//
// Example Output (before refactor):
//
// ```js
// 2
// ```
//
// Example Output (after 1st refactor):
//
// ```js
// [
// 'user1@email.com',
// 'user2@email.com'
// ]
// ```
//
// Example Output (after 2nd refactor):
//
// ```js
// [
// {
//     isAdmin: true,
//     email: 'user1@email.com'
// },
// {
//     isAdmin: true,
//     email: 'user2@email.com'
// }
// ]
// ```

                                        // var users = [
                                        //     {
                                        //         isAdmin: true,
                                        //         email: 'user1@email.com'
                                        //     },
                                        //     {
                                        //         isAdmin: true,
                                        //         email: 'user2@email.com'
                                        //     },
                                        //     {
                                        //         isAdmin: false,
                                        //         email: 'user3@email.com'
                                        //     }
                                        // ];

                                        // function adminList(users) {
                                        //     var count = 0;
                                        //     users.forEach(function(user) {
                                        //         if (user.isAdmin) count++;
                                        //     });
                                        //     return count;
                                        // }
                                        //
                                        // console.log(adminList(users));

                                        // function adminList(users) {
                                        //     var emails = [];
                                        //     users.forEach(function(user) {
                                        //         if (user.isAdmin) {
                                        //             emails.push(user.email);
                                        //         }
                                        //     });
                                        //     return emails;
                                        // }
                                        //
                                        // console.log(adminList(users));

                                        // function adminList(users) {
                                        //     var outputArr = [];
                                        //     users.forEach(function(user) {
                                        //         if (user.isAdmin) {
                                        //             outputArr.push(user);
                                        //         }
                                        //     });
                                        //     return outputArr;
                                        // }
                                        //
                                        // console.log(adminList(users));



// ## Problem 5
//
// Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.
//
//     Example Input:
//
//     ```js
                                        var breads  = [
                                            "white",
                                            "wheat",
                                            "rhy",
                                            "white"
                                        ];

                                        var fillings = [
                                            "pb&j",
                                            "ham",
                                            "cheese steak",
                                            "tuna"
                                        ];
//
// makeSandwhichObjects(breads, fillings) // example call to the function
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     bread: "white,
//     filling: "pb&j"
// },
// {
//     bread: "wheat",
//     filling: "ham"
// },
// {
//     bread: "rhy",
//     filling: "cheese steak"
// },
// {
//     bread: "white",
//     filling: "tuna"
// }
// ]
// ```

                                        function makeSandwhichObjects(breads, fillings) {
                                            var sandwiches = [];
                                            for (var i = 0; i < breads.length; i += 1) {
                                                sandwiches.push({
                                                    bread: breads[i],
                                                    filling: fillings[i]
                                                });
                                            }
                                            return sandwiches;
                                        }

                                        console.log(makeSandwhichObjects(breads, fillings));

//
// ## Problem 6
//
// Create a function, ```firstLettersOfStringProps```, that takes in an object and returns an array of first letters for each property that is a string.
//
//     Example Input:
//
//     ```js
// {
// propA: true,
// propB: "hello"
// propC: 23,
// propD: "world"
// }
// ```
//
// Example Output:
//
//     ```js
// ['h', 'w']
// ```

                                        var someObj = {
                                            propA: true,
                                            propB: "hello",
                                            propC: 23,
                                            propD: "world"
                                        };

                                        function firstLettersOfStringProps(obj) {
                                            var output = [];
                                            Object.keys(obj).forEach(function(prop) {
                                                if (typeof obj[prop] === "string") {
                                                    output.push(obj[prop][0]);
                                                }
                                            });
                                            return output;
                                        }

                                        console.log(firstLettersOfStringProps(someObj));

// ## Problem 7
//
// Create a function, ```returnBasicUserData```, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a ```name``` and ```age``` property. The function will return a new array of objects that contain only ```name``` and ```age	``` properties and values from the input array of user objects.
//
//     Example Input:
//
//     ```js
// [
// {
//     name: "Fred Smith",
//     favColor: "Blue",
//     age: 25
// {,
// {
//     name: "Sally Smith",
//     favPet: "Dogs",
//     isAdmin: true,
//     age: 37
// {,
// {
//     phoneNumber: "5552759898",
//     name: "Karen Smith",
//     age: 19
// {
// ]
//
// ```
//
// Example Output:
//
//     ```js
// [
// {
//     name: "Fred Smith",
//     age: 25
// {,
// {
//     name: "Sally Smith",
//     age: 37
// {,
// {
//     name: "Karen Smith",
//     age: 19
// {
// ]
//
// ```

                                        var users = [
                                            {
                                                name: "Fred Smith",
                                                favColor: "Blue",
                                                age: 25
                                            },
                                            {
                                                name: "Sally Smith",
                                                favPet: "Dogs",
                                                isAdmin: true,
                                                age: 37
                                            },
                                            {
                                                phoneNumber: "5552759898",
                                                name: "Karen Smith",
                                                age: 19
                                            }
                                        ];

                                        function returnBasicUserData(users) {
                                            var output = [];
                                            users.forEach(function(user) {
                                                output.push({
                                                    name: user.name,
                                                    age: user.age
                                                });
                                            });
                                            return output;
                                        }

                                        console.log(returnBasicUserData(users));

// ## Problem 8
//
// Create a function, ```returnCharCount```, that takes in an array or an object and will return the total number of characters for any string elements or string properties.
//
//     Example 1 Input:
//
//     ```js
// ['hello', true, 25, null, undefined, '', 'world']
// ```
//
// Example 1 Output:
//
//     ```js
// 10
// ```
//
// Example 2 Input:
//
//     ```js
// {
// someProp1: true,
// someProp2: null,
// someProp3: "hello",
// someProp4: 88,
// someProp5: "world"
// }
// ```
//
// Example 2 Output:
//
//     ```js
// 10
// ```

                                        // var ex1 = ['hello', true, 25, null, undefined, '', 'world'];
                                        //
                                        // var ex2 = {
                                        //     someProp1: true,
                                        //     someProp2: null,
                                        //     someProp3: "hello",
                                        //     someProp4: 88,
                                        //     someProp5: "world"
                                        // };
                                        //
                                        // function returnCharCount(input) {
                                        //     var output = 0;
                                        //     for (var x in input) {
                                        //         if (typeof input[x] === "string") {
                                        //             output += input[x].length;
                                        //         }
                                        //     }
                                        //     return output;
                                        // }
                                        //
                                        // console.log(returnCharCount(ex2));

                                    </script>

                                    </body>
                                    </html>