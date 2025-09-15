//if else
// 4/2=>0 even
// 4/2=>1 odd
function oddEven(number){
    if (number%2 == 1 && number>0){
        console.log(number+" is a ODD number");
    }
    else if(number%2 == 0 && number>0){
        console.log(`${number} is a Even Number`);
    } else{
        console.log(`${number} is not applicable for this`)
    }
}

oddEven(0);