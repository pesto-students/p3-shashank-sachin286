// bind() function example
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var jeep = {
    registrationNumber: "KL12345",
    brand: "Jeep",
}

var myCarDetails =  car.displayDetails;
myCarDetails(); //this is will display undefined as the this object is in global context and not within car object

var bindedCarDetails = car.displayDetails.bind(car); 
bindedCarDetails(); // this is will display GA12345 Toyota as the parameters are binded with the thsi object

bindedCarDetails(jeep); 
// even if we provide jeep object the above output will be of car object because we binded car object to that function
// and not jeep object


//apply() call() function example
var vehicle = { 
    registrationNumber: "GA12345",
    brand: "Mercedes"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.apply(vehicle, ["Sachin"]); //output is Sachin, this is your car: GA12345 Mercedes

displayDetails.apply(vehicle, ["Lewis"]); //output is Lewis, this is your car: GA12345 Mercedes
//in apply() the arguments are passed as array
//this helps to be in runtime pass of arguments and dynamic

displayDetails.call(vehicle, "Toto"); //output is Toto, this is your car: GA12345 Mercedes
//differece is that we can pass arguments in call directly and not in an array
//this is more of compile time arguments