// String reverse without using inbult function

var inp = "hello Moto";

var empar = "";

for(i=(inp.length)-1; i>=0; i--){

    var new_inp = inp[i];
    empar = empar+new_inp
}

console.log(empar)  

