const fs = require("fs");

let f1KaData = fs.readFileSync("../facts/f1.txt","utf8");
let f2KaData = fs.readFileSync("../facts/f2.txt","utf8");
// console.log(f1KaData);
// console.log(f2KaData);

// let bothOutput = f1KaData + "\n" + f2KaData;
// console.log(bothOutput);


//-s -> remove extra spaces
//console.log(f1KaData.split("\n")); 
//console.log(f1KaData.split("\r")); 
//console.log(f1KaData.split("\r\n")); 

// function applySFlag(data) {
// Hey I am F1
// space
// space
// space
// space
// space
// Bye I am F1
// let emptyIncluded = false;
// let removedSpaces = [];
// let splittedData = data.split("\r\n");
// for ( let i = 0 ; i < splittedData.length ; i++) {
//     if ( splittedData[i] == "" && emptyIncluded == false ) {
//         removedSpaces.push(splittedData[i]);
//     } else if ( splittedData[i] != "") {
//         removedSpaces.push(splittedData[i]);
//         if ( i < splittedData.length-2 ) emptyIncluded = false;
//     }
//   }
    
//         let removedSpacesString = removedSpaces.join("\r\n");
//         console.log(removedSpacesString);  

// }

// applySFlag(f1KaData);


// -b flag = add line number to non empty lines


// function applyBFlag(data) {
//     let count = 1;
    
//     let splittedData = data.split("\r\n");   // [ 'Hey I am F1', '', '', '', '', '', 'Bye I am F1' ]

//     for ( let i =0 ; i < splittedData.length ; i++) {
//         if ( splittedData[i] != "") {
//             splittedData[i] = `${count}. ${splittedData[i]}`;
//             count++;
//         } 
        
//     }
//         let s = splittedData; 
//     //  console.log(splittedData); // [ '1. Hey I am F1', '', '', '', '', '', '2. Bye I am F1' ]
//         let answer = s.join("\r\n");
//         console.log(answer);
// }
// applyBFlag(f1KaData);




// - n flag

// function nFlag(data) {
//     let count = 1;
//     let splittedData= data.split("\r\n");
//     for ( let i = 0 ; i < splittedData.length ; i++) {
//         splittedData[i] = `${count}. ${splittedData[i]}`;
//         count++;
//     }
//     let answer = splittedData;
//     console.log(answer);
//     let s = answer.join("\r\n");
//     console.log(s);

// }
// nFlag(f1KaData);






