var pn = prompt("Type any number to check whether it is Prime or not?");

for(i=2; i<=pn; i++){

    if (i == pn){

        alert("This Number is a Prime Number")
        break
    }

    if(pn%i==0){

        alert("This Number is not Prime Number")
        break

    }

}