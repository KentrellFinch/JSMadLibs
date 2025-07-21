let animal = "unicorn";
let adjective = "sparkly";
let verb = "danced";

let numRainbows = 7;

let doubleRainbows = numRainbows * 2;

let isMagical = true;

let userName = prompt("What's your name?");

let story = "One day, " + userName + " saw a " + adjective + " " + animal +
            " that " + verb + " across " + numRainbows + " rainbows. " +
            "It was so magical that the rainbows doubled to " + doubleRainbows +
            ". Was it real? " + isMagical + "!";

console.log(story);
document.body.innerHTML += "<p>" + story + "</p>"; 
