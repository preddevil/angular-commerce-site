import {Component} from '@angular/core';
import {Book} from '../../model/book';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {

    listOfProducts: Array<Book> = [
        new Book('Clean Code', 'Clean Code', 50),
        new Book('Refactoring', 'Refactoring book', 60),
        new Book('Programming in C', 'Best book about C', 40)
    ];

    constructor(){}
}