var str = "navdeep";

var vowstr = ["a","e","i","o","u"];

var finalstr = "";

for(i = 0; i<str.length; i++){

    var word = str[i];

    if(vowstr.includes(word)){

        var finalstr = finalstr+word

    }

}

console.log(finalstr)
console.log(finalstr.length)