var a = 20;

function test1(){
    var b = 100;
    console.log(a); // 20
        function test2(){
            //console.log(a); //20
            console.log(b); // 100
            
        }
        test2();
};

test1();






// var a = 20;

// function test1(){
//     var b = 100;
//     console.log(a); // 20
//         function test2(){
//             console.log(a); // undefined
//             var a= 20;
//             //console.log(a); //20
//             console.log(b); // 100
//         }
//         test2();
// };

// test1();