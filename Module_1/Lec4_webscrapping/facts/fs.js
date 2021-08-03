// In DEV_PP11 folder
// npm init -y
// npm install cheerio

const fs = require ("fs");
const cheerio = require("cheerio"); 

let htmlKaData = fs.readFileSync("./index.html","utf8");
// console.log(htmlKaData); // This will show stringified HTML file !!!


//HTML file is loaded in cherio
let myDocument = cheerio.load(htmlKaData);
// console.log(myDocument);  // object ,function, initialize {}

let h1KaData = myDocument("h1").text();
// console.log(h1Element); //element => cheerio => object form me data
// console.log(h1KaData); 

let ptag = myDocument("p");                    //This is very important 
                                                      
// console.log(ptag.length);
// console.log(myDocument(ptag).text( ));             
// for ( let i = 0 ; i  < ptag.length ; i++) {
//     let ptagData = myDocument(ptag[i]).text();
//     console.log(ptagData);
// }


//Selectors
// console.log(myDocument("ul p").text()); // it will give all the p tags inside ul
// console.log(myDocument("ul  a").text()); // you will get all a tags inside li
// console.log(myDocument("ul li a").text());
// console.log(myDocument("ul>a").text()); // only direct child !!
console.log(myDocument(".inside.main").text()); // classes and ids / dot
console.log(myDocument(".inside").text());
//console.log(myDocument("#main-heading").text()); // # for id
console.log(myDocument("table thead tr th").text());  // ** important to understand the activity
// console.log(myDocument("table td").text()); 
console.log(myDocument(".main.hu").text()); 
