var arr = [2,3,4,5,6,8]

function user_in(arr_num){

    for(i=0; i<arr.length; i++){

        if(arr[i] == arr_num){

           return num_index = i;
           break;
        }


    }

}

console.log(user_in(6))