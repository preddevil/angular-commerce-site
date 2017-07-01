import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule
} from '@angular/core';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {ErrorNotFoundComponent} from './error.component'

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavigationComponent,
    ErrorNotFoundComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AppRoutingModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [

  ]
})
export class AppModule {

}