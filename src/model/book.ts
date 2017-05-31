export class Book {
    constructor(name: String, description: String, price: number) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    name: String;
    description: String;
    price: number
}