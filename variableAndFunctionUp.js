console.log(a);    //fn

a();    //fn

var a = 3;

function a() {
    console.log(10);
}

console.log(a); // var 3

a = 6;

a();    //报错 a is not function