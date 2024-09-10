// 4 Declarando una interfaz sencilla con una propiedad opcional
interface Animal{
    firsName: string;
    lastName?: string;
}
 // Declaro una variable que tiene asignado tipos de datos como la interfaz Person
const perro: Animal = {
    firsName: "Doggy"
}