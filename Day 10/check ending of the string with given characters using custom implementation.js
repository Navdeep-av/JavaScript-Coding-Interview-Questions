var last_str = "world";

var first_str = "Hello world";

var last_str_length = last_str.length;

var updated_str=first_str.slice(-last_str_length);

if(last_str == updated_str){

    alert("True")
}

else{

    alert("False")

}