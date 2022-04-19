import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsComponent } from './components/continents/continents.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryInfosComponent } from './components/country-infos/country-infos.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'countries', component: CountriesComponent},
                        {path: 'countries/:continent', component: CountriesComponent},
                        {path: 'countries/infos/:name', component: CountryInfosComponent},
                        {path: 'countries/:name', component: CountriesComponent},
                        {path: 'continents', component: ContinentsComponent},
                        {path: '**', component: ErrorNotFoundComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
