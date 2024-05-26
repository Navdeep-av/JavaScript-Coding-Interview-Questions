var arr = [2,4,9,6,4,3,5,8]
var dup_ele = [];

for (i = 0; i<arr.length; i++){

    for(j = i+1; j<arr.length; j++){

        if(arr[i]==arr[j]){

            console.log(arr[i])

        }
    }

}