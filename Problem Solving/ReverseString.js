//H_W
// prime number= 2,3,5,7,11,13,17,19,23
// "Hello" => "olleH"
// 1234 => 4321
// int, string
//const data

function reverseString(text){
    let output = " "; 
    for(let i = text.length -1; i>=0; i-- ){
        output +=text[i];
    }
    console.log(output);
}
reverseString("Hello");


