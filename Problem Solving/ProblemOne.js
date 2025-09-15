//factorials
//4!= 4*3*2*1= 24
//5!= 5*4*3*2*1 = 120

function factorials(number){
    let ans=1;
    for(let i=1; i<=number; i++){
        ans = ans*i;
    }
    console.log(`Factorials of ${number} in ${ans}` );
}
factorials(4);