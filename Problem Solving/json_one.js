// July 2
//JSON Data
const car = [
    {
        name : "BMW",
        variattion : 
        {
        color : "red",
        wheel : "4",
        size : "4 seater",
        }
    },


    {
        name : "Audi",
        variattion : 
        {
        color : "red",
        wheel : "4",
        size : "2 seater",
        }
    },


    {
        name : "Honda",
        variattion : 
        {
        color : "black",
        wheel : "4",
        size : "4 seater",
        height : "4 m"
        }
    },


    {
        name : "Hyundai",
        variattion : 
        {
        color : "black",
        wheel : "4",
        size : "2 seater",
        }
    },
];


//Problems:

//problem 1: bmw=> color & wheel?
//problem 2: color=> black, car Name?
//problem 3: color=> black, generate "index"(id) number?


//problem 1: bmw=> color & wheel?
//ans1
// function jsonParse(data){
//     console.log(data[0].variattion.color);
//     console.log(data[0].variattion.wheel);
// }
// jsonParse(car);


//ans 1 different
// function jsonParse(data){
//     for(let i=0; i < car.length; i++){
//         if(car[i].name=="Audi"){
//             console.log(data[i].variattion.color);
//             console.log(data[i].variattion.wheel);
//         }
//     }
// }
// jsonParse(car);

//ans 1 (read all data using "for "in"" loop)
// function jsonParse(data){
//     for(key in data){
//         if(data[key].name == "BMW"){
//             console.log(data[key].variattion.color);
//             console.log(data[key].variattion.wheel);
//         }
//     }
// }
// jsonParse(car);


//problem 2: color=> black, car Name?
//ans 2
// function jsonParse(data){
//     for(key in data){
//         if(data[key].variattion.color == "red"){
//             console.log(data[key].name);
//         }
//     }
// }
// jsonParse(car);



//problem 3: color=> black, generate "index"(id) number?
//ans 3 (using parseInt for int)
function jsonParse(data){
    for(key in data){
        if(data[key].variattion.color == "black"){
            data[key].id = parseInt(key)+1;
        }
    
    }
    console.log(data);
}
jsonParse(car);



// checking data 
// result//
// undefined//
// 2.5 m//
// undefined//
// undefined //

// function jsonParse(data){
//     for(key in data){
//         console.log(data[key].variattion.height);
    
//     }
// }
// jsonParse(car);



//Checking exactly which data we need

// function jsonParse(data){
//     for(key in data){
//         if(data[key].variattion.hasOwnProperty("height")){
//             console.log(data[key].name);
//         }
    
//     }
// }
// jsonParse(car);