console.log("Starting");
var v = 10;
let l = 30;
const c = 20;

// console.log(v, l, c);

function scopeTest(){
    var v = 5;
    let l = 40;
    const c = 30;

    console.log(v, l, c);
}

scopeTest();