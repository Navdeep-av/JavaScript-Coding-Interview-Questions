var user_str = "Navdeep Gupta LP s";

var user_str_new = "";

for (i = 0; i<user_str.length; i++){

var n_word = user_str[i]

if (n_word==" "){
    user_str_new = user_str_new+user_str[i]
}

else if(!user_str_new.includes(n_word)){
    user_str_new = user_str_new+user_str[i]
}    

}

console.log(user_str_new)