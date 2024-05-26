var arr = [7,-5,5,1,1,1,10,3];

var sum_arr = [];

var val = false;

for (i = 0; i<=arr.length; i++){

    for(j = i+1; j<arr.length; j++){

        if(arr[i]+arr[j]==0){

            sum_arr.push(arr[i]);
            sum_arr.push(arr[j])
            console.log(sum_arr)

            val = true;
            break
        }
    }

    if(i==8){

        alert("There is no Pair")
    }

    if (val == true){
        break;
    }

}