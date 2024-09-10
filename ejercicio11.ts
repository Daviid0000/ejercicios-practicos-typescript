interface Shape {
    area(): number 
}

class Circle implements Shape {
    num1: number
    
    constructor(num1: number) {
        this.num1 = num1
    }

    area(): number {
        const numberPI = Math.PI; 
        return numberPI * this.num1 * this.num1;
    }
}

const circle = new Circle(6);
console.log(circle.area());