let fs = require("fs");

function myPromisifiedFun(filePath){
    return new Promise( function(scb , fcb){
        
        // async func
        fs.readFile( filePath , function(error , data){   // executor
            if(error){
               console.log("errorrrr");; // Do this when it fails
            }
            else{
                 console.log("Successss");  // Do this when it sowrks
            }
        })
       

    }); //it will create a new promise object !!!   
}

let pendingPromise = myPromisifiedFun("./f1.txt");

pendingPromise.then((data)=>{
    console.log(data+"");                                // If pendingPromise is resolved , .then will run
});   
                                                
pendingPromise.catch(fcb);

// function scb(data){
//     console.log(data+"");
// }
function fcb(error){
    console.log(error);
}