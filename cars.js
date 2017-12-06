var makeInput = document.getElementById("make"),
    modelInput = document.getElementById("model"),
    yearInput = document.getElementById("year");
    vinInput = document.getElementById("vin"),
    addButton = document.getElementById("addButton"),
    displayList = document.getElementById("display-list"),
    car = [];

var Car = function Car(make, model, year, vin) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.vin = vin;
    this.getDisplayText = function () {
        return this.make + " by " + this.model + "by " + this.year + "by " + this.vin;
    }
}

var renderList = function renderList() {
    displayList.innerHTML = "";
    books.forEach(function (car, index, arr) {
        displayList.innerHTML += car.getDisplayText() + "<br>";
    });
};

addButton.addEventListener("click", function () {
    var newCar = new Car(makeInput.value, modelInput.value);
    Car.push(newCar);
    renderList();
});