import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {ProductThumbnailComponent} from '../product-thumbnail/product-thumbnail.component'
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        ProductThumbnailComponent
    ],
    providers: [

    ]
})
export class HomeModule {}