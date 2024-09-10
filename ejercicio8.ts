// Se declara una clase Car2 similar a Car, esta clase utiliza un constructor que más sencillamente recibe 
// por parámentro la marca del carro que se está creando.
class Car2 {
    make: string
    
    constructor(make: string) { 
        this.make = make;
     }

     drive(){
        console.log(`Driving a ${this.make}`);
     }
}

const car2 = new Car2("Toyota");
car2.drive();