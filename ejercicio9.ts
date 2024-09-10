// Definiendo una clase Car con propiedades privadas

class Car3{
    private make: string

    constructor(make: string) {
        this.make = make
        this.getMake()
    }
    
    getMake(){
        return this.make
    }
}

const car3 = new Car3("Monster")

