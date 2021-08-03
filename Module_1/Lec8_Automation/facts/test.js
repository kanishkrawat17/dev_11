let a = 10;

new Promise(function (resolved , reject) {
    if ( a == 10){
       console.log("swdd");
    }
    return a;
})
.then((data)=>{
    console.log(data);
})
    


// function resolved(){
//     console.log("error");
// }