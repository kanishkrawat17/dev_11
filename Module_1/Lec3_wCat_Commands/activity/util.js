
const fs = require("fs");
function applySFlag(data) {
    // Hey I am F1
    // space
    // space
    // space
    // space
    // space
    // Bye I am F1
    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = data.split("\r\n");
    for ( let i = 0 ; i < splittedData.length ; i++) {
        if ( splittedData[i] == "" && emptyIncluded == false ) {
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;
        } else if ( splittedData[i] != "") {
            removedSpaces.push(splittedData[i]);
            if ( i < splittedData.length-2 ) emptyIncluded = false;
        }
      }
        
            let removedSpacesString = removedSpaces.join("\r\n");
            return removedSpacesString;  
    
    }

    function getFilesData(files) {
        let f = "";
        for ( let i =0 ; i  < files.length ; i++) {
            if ( !fs.existsSync(files[i])) {
                console.log("one or more files doesnt exist");
                return
            } if ( i == files.length-1) {
                f += fs.readFileSync(files[i]);
            }else {
                f += fs.readFileSync(files[i]) + "\r\n";
                }
    
        }
        return f;
    }

function applyBFlag(data) {
    let count = 1;
    
    let splittedData = data.split("\r\n");   // [ 'Hey I am F1', '', '', '', '', '', 'Bye I am F1' ]

    for ( let i =0 ; i < splittedData.length ; i++) {
        if ( splittedData[i] != "") {
            splittedData[i] = `${count}. ${splittedData[i]}`;
            count++;
        } 
        
    }
        let s = splittedData; 
    //  console.log(splittedData); // [ '1. Hey I am F1', '', '', '', '', '', '2. Bye I am F1' ]
        let answer = s.join("\r\n");
        return answer;
}

function nFlag(data) {
    let count = 1;
    let splittedData= data.split("\r\n");
    for ( let i = 0 ; i < splittedData.length ; i++) {
        splittedData[i] = `${count}. ${splittedData[i]}`;
        count++;
    }
    let answer = splittedData;
    console.log(answer);
    let n = answer.join("\r\n");
    return n;

}



    module.exports.applySFlag = applySFlag;
    module.exports.getFilesData = getFilesData;
    module.exports.applyBFlag = applyBFlag;
    module.exports.nFlag = nFlag;