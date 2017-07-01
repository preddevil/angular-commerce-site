import {Component} from '@angular/core';
import {Book} from '../../model/book';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent {

    listOfProducts: Array<Book>;

    constructor(){
        this.listOfProducts = this.getMockData();
    }

    getMockData(): Array<Book>{
        return [
            new Book('Indian Cooking','350 recipes from the regions of India', 50, [3]),
            new Book('Vietnamese Home Cooking', 'Vietnamese recipes', 40, [3]),
            new Book('Italian Cooking', '200 Italian recipes', 45, [3]),
            new Book('The Keto Diet Cookbook', '150 delicious diet recipes', 40, [3]),
            new Book('Core Java vol.1', 'Java', 30, [1]),
            new Book('Core Java vol.2', 'Java', 32, [1]),
            new Book('You dont know JS', 'JavaScript', 30, [1]),
            new Book('Clean Code', 'Clean Code', 50, [1]),
            new Book('Think and grow rich', 'Think and grow rich', 40, [2]),
            new Book('How to stop thinking and start living', 'How to stop thinking and start living', 45, [2]),
            new Book('The power of now', 'The power of now', 40, [2]),
            new Book('Make people like you', 'Make people like you', 35, [2]),
            new Book('Good to great', 'Good to great', 45, [4]),
            new Book('Take to stairs', 'Take to stairs', 35, [4]),
            new Book('Where are your now?', 'Where are your now?', 42, [4]),
            new Book('The girl on the train', 'The girl on the train', 30, [4])
        ]; 
    } 

}
