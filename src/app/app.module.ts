import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms' ;
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SinginPageComponent } from './singin-page/singin-page.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'app-about-page', component: AboutPageComponent},
  { path: 'app-singin-page', component:	SinginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent ,
    HomePageComponent,
    AboutPageComponent,
    SinginPageComponent,
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(appRoutes),
    FormsModule ,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAcwFf83tZl_GVK0JaIbzzrrHl9Xaga4Rc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
}   )
export class AppModule { }
