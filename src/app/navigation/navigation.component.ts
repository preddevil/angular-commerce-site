import {
  Component, EventEmitter, Output
} from '@angular/core';

@Component({
    selector: 'navigation',
    styleUrls: ['./navigation.component.scss'],
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {
    @Output()
    navigationMenuClicked = new EventEmitter();

    navigationMenu: Array<Object> = [
        {
        id: 1,
        name:"Programming"
        },
        {
        id: 2,
        name: "Self-help"
        },
        {
        id: 3,
        name: "Cooking"
        }, 
        {
        id: 4,
        name: "Suspense"
        }
    ];

    clickNavigation(id: number) {
        console.log(id);
        this.navigationMenuClicked.emit();
    }

}