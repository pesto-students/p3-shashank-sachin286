//apply() call() function example

var car = { 
    registrationNumber: "GA12345",
    brand: "Mercedes"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.apply(car, ["Sachin"]); //output is Sachin, this is your car: GA12345 Mercedes

displayDetails.apply(car, ["Lewis"]); //output is Lewis, this is your car: GA12345 Mercedes
//in apply() the arguments are passed as array
//this helps to be in runtime pass of arguments and dynamic

displayDetails.call(car, "Toto"); //output is Toto, this is your car: GA12345 Mercedes
//differece is that we can pass arguments in call directly and not in an array
//this is more of compile time arguments