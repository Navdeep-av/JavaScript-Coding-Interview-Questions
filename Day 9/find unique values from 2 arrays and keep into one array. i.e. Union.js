var arr_one = [1, 2, 3, 4, 5]

var arr_two = [4, 5, 6, 7, 8]

var unique_arr = arr_one.concat(arr_two)

var unique_arr_v2=[]
    
// unique_arr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]



for(i = 0; i<unique_arr.length; i++){

        if(!unique_arr_v2.includes(unique_arr[i]))

            {
                    unique_arr_v2.push(unique_arr[i])
            }

    
}

console.log(unique_arr_v2)