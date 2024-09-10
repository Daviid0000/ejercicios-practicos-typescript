// Se ha declarado una clase ElectricCar heredada de la Clase Car


class ElectricCar extends Car2 {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
        super(make)
        this.batteryLife = batteryLife
    }

    charge() {
        console.log(`This car loading... ${this.batteryLife}`)
    }
}

const car4 = new ElectricCar("Mostruo", 2);
car4.drive();
car4.charge();


// Version fallida:

// class ElectricCar extends Car2{
//     make: string;
//     batteryLife: number;

//     constructor() {
//        super(this.make = make)
//         this.batteryLife = batteryLife;

//     }
//     drive() {
//         console.log(`Draving a ${this.make}`);
//     }

//     charge() {
//         console.log(`Car loading ${this.batteryLife}`);
//     }
// }

// const newCar = new ElectricCar();
// newCar.make = "Monster";
// newCar.batteryLife = 318919469731;
// newCar.drive();
// newCar.charge();
