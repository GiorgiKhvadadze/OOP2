function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getcarInfo = function () {
        document.write("make" + "  " + this.make + "  " + " model " + "  " + this.model + "  " + "released in " + "  " + this.year + "</br>")
    };
}

function Person(name, age, cars) {
    this.name = name;
    this.age = age;
    this.cars = cars;

    this.driveCar = function (car) {
        document.write(" " + "და ყავს მანქანა" + " " + car.make + " " + car.model + " " + car.year)
    };

    this.displayInfo = function () {
        document.write(this.name + "  " + "არის" + "  " + this.age + "  " + "წლის")
    }
}

var tom = new Person("Tom", 24);
tom.displayInfo();

var tesla = new Car("Tesla", "Model S", 2015);

tom.driveCar(tesla);
