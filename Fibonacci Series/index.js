var first_arr = [0,1];


for (i = 0; i<=7; i++)
    {
       var new_ele = first_arr[i]+first_arr[i+1];
        first_arr.push(new_ele)
        // if(i==7){
        //     break;
        // }
    }

console.log(first_arr)    


// [0,1,1,2,3,5,8,13,21,34]

8