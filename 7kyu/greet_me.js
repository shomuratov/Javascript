// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

let greet = function(name) {
    return console.log(`Hello ${(name.slice(0,1).toUpperCase())+(name.slice(1).toLowerCase())}!`)
};

greet('Azamat')
