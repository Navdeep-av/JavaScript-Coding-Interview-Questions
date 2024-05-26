// method one

var a = prompt("Write Below");
var empstr = "";
for(i=(a.length - 1); i>=0; i--){

    var newword = a[i];

    var empstr = empstr+newword;

}




if (a == empstr){
    alert("It is a Palingdrom")
}
else{

    alert("Not")
}


// Method two


var b = prompt("Write Below");

var new_str = b.split('').reverse().join()

if (b== new_str){
    alert("True")
}
else{
    alert("False")
}