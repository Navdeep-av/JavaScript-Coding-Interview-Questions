var user_str = ["test", "pp", "test"];

var user_str_new = [];

for (i = 0; i<user_str.length; i++){

var n_word = user_str[i];

if(!user_str_new.includes(n_word)){
    // user_str_new = user_str_new.push(n_word) (Why this not works)
    user_str_new.push(n_word)
}    

}

console.log(user_str_new)