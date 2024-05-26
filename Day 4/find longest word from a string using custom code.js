var str = "To find the longest word from a string using custom code in JS";

var strs = str.split(" ");

var largstr = 0;

for(i=0; i<strs.length; i++){

    var str_lenght = strs[i].length;

    if (largstr < str_lenght){

        var largstr = str_lenght;
        var large_word = strs[i];
        
    }

}

console.log(largstr)
console.log(large_word)