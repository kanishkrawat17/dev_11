const fs = require("fs");
let files = ["../f1.txt" , "../f2.txt","../f3.txt"];
let i = 0;


let count = 0;
while ( i < files.length){
    //count++;
    console.log("count before entering into async",count);
    fs.readFile(files[i], function(error,data){
        console.log(data+"");
        count--;
        console.log("count into async ",count);
            

    })
    count++;
    i++;
}

    
