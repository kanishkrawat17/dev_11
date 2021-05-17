
const { applySFlag , getFilesData, applyBFlag , nFlag } = require("./util.js");

//console.log(process); // process is  an object in node.js it has a key arv
let contents = process.argv.slice(2);
//console.log(contents);

const flags = [];
const files = [];

for ( let i =0 ; i < contents.length ; i++) {
    if (contents[i].startsWith("-")) {
        flags.push(contents[i]);
    } else {
        files.push(contents[i]);
    }
}


// input - node wCat.js f1.txt f2.txt -s -b
// console.log(files);     // [ 'f1.txt', 'f2.txt' ]
// console.log(flags);     // [ '-s', '-b' ]


let filesData = getFilesData(files);
// console.log(filesData);

if ( flags.includes("-s")) {
    filesData= applySFlag(filesData);
    
    
}

if ( flags.includes("-b") && flags.includes("-n")) {
    if (flags.indexOf("-b") < flags.indexOf("-n")) {
        filesData = applyBFlag(filesData);
        
    }
    else {
        filesData = nFlag(filesData);
        
    }
}
    else if (flags.includes("-b")){
        filesData = applyBFlag(filesData);
    }
    else if (flags.includes("-n")){
        filesData = nFlag(filesData);
    }
console.log(filesData);


