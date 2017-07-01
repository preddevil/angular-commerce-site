export class Book {
    name: String;
    description: String;
    price: number;
    categories: Array<number>;
    constructor(name: String, description: String, price: number, categories: Array<number>) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.categories = categories;
    }
}