import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { FormsModule } from '@angular/forms';
import { CountryInfosComponent } from './components/country-infos/country-infos.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    CountriesComponent,
    CountryComponent,
    CountryInfosComponent,
    HomeComponent,
    NavBarComponent,
    ErrorNotFoundComponent,

    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
