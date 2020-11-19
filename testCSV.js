const CSV = require('./csv');

let stringNormal = `2015 Dream Concert,4Minute, B1A4, BtoB, ELSIE, EXID, EXO, Got7, INFINITE, KARA, Shinee, Sistar, VIXX, Nine Muses, BTS, Secret, Topp Dogg,,,,,,,`;
let stringColon = `2015 Dream Concert,"4Minute, B1A4, BtoB, ELSIE, EXID, EXO, Got7, INFINITE, KARA, Shinee, Sistar, VIXX, Nine Muses, BTS, Secret, Topp Dogg",,,,,,,`;
let stringDoubleQuote = `"Gabriel ""Fluffy"" Iglesias: One Show Fits All",Gabriel Iglesias,,,,,,,
Gabriel lglesias: I’m Sorry For What I Said When I Was Hungry,Gabriel Iglesias,,,,,,,`;

let twoDArray = [
    ['title', 'cast'],
    ['Holy Fox', 'Holy, Fox'],
    ['Gabriel "Fluffy" Iglesias: One Show Fits All', 'Gabriel Iglesias', '', '', '', '', '', '', ''],
];

// console.log(CSV.parse(stringNormal));
// console.log(CSV.parse(stringColon));
console.log(CSV.parse(stringDoubleQuote));
console.log(CSV.stringify(twoDArray));
