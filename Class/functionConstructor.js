
//for class I have to use constructor for define. But in function I don't need to use it.
class Eleven{
    constructor(carName, Model){
        this.name = carName;
        this.model = Model;

    }
}
const myCar = new Eleven("Honda", "SuV");
console.log(myCar.name)