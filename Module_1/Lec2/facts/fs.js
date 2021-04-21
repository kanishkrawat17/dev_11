// fs => file System

const fs = require("fs");

// console.log(fs);

// utf-8 => format for plain text !!

// let f1KaData = fs.readFileSync("./f1.txt");
// console.log(f1KaData + "");

let f1KaData = fs.readFileSync("./f1.txt",'utf-8'); // This is another way to print using utf -8
console.log(f1KaData);



fs.writeFileSync("index.html" , "Hello world !!!"); // will create index.html file
fs.writeFileSync("../activity/activity.js" , "akjsbfkjabsf"); // will make file out of this folder and make a file in activity folder ../
fs.writeFileSync("./file.txt","I am the best"); //  will make file in the current folder ./
fs.writeFileSync("../file.txt","ok report hai"); /// will make a file out of this folder  which is facts 


