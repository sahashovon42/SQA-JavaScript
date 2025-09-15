//fibonacci series
// 1 1 2 3 5 8 13 21 34 55 89

//normal solve
// function fibonacci(number){
//     let num1 = 0;
//     let num2 = 1;
//     for(let i=1; i<= number; i++){
//         console.log(`${num1}`);
//         let ans = num1 + num2;
//         num1 = num2;
//         num2 = ans;
//     }
       
// }
// fibonacci(10);


// array solve
function fibonacci(number){
    let num = [0,1];
    for(let i=2; i< number; i++){
        num[i] = num[i-1] + num[i-2];
        num.push(num[i]);
    }
    console.log(num)
}
fibonacci(10);