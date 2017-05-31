import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule
} from '@angular/core';
import {AppComponent} from './app.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [

  ]
})
export class AppModule {

}