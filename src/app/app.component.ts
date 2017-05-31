import {
  Component
} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

  navigationMenu = ["Programming", "Self-help", "Cooking"];

  navigationMenuClicked() {
    console.log('abc');
  }

}