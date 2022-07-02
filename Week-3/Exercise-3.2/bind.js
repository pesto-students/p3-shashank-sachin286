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
