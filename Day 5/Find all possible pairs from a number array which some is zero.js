var arr = [7,-5,5,1,1,1,-3,3];

var sum_arr = [];

for (i = 0; i<=arr.length; i++){

    for(j = i+1; j<arr.length; j++){

        if(arr[i]+arr[j]==0){

            sum_arr.push(arr[i]);
            sum_arr.push(arr[j])
        }
    }
}

console.log(sum_arr)