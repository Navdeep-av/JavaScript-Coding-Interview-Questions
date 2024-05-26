var str = "convert in capital letter";

var strs = str.split(" ")

var final_arr = []

for(i = 0; i<strs.length; i++){

    var new_str = strs[i][0].toUpperCase() + strs[i].slice(1)

    final_arr.push(new_str)

}

console.log(final_arr.join(" "))

