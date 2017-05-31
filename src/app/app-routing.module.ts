import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ErrorNotFoundComponent} from './error.component';

const appRoutes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: '**', component: ErrorNotFoundComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}