// Declarando una clase Car que define una variable con tipo string y un método que deja un mensaje por consola
class Car {
    make: string

     drive(){
        return console.log(`Driving a ${this.make}`);
    }
}

const car = new Car();
car.make = "Ferrari";
car.drive();
