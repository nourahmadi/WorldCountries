import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { Country } from '../country/Model/country';

@Component({
  selector: 'app-country-infos',
  templateUrl: './country-infos.component.html',
  styleUrls: ['./country-infos.component.css']
})
export class CountryInfosComponent implements OnInit {

  country:Country | null = null;

  languages:string = '';

  constructor(private apiService: ApiService, private routerService:Router) { }

  ngOnInit(): void {
    this.country =this.apiService.getCountry();
    this.languages = Object.values({...this.country?.languages}).toString();
  }
  navigateToCountries(){
    this.routerService.navigate(['/countries']);
  }

}




  
