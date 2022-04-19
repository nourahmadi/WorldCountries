import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-countinents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  continent: string= '';
  constructor(private apiService: ApiService){}

  setContinentAfrica(){
    this.continent = 'Africa'
    this.apiService.getCountriesByContinent(this.continent);
  }
  setContinentAmerica(){
    this.continent = 'Americas'
    this.apiService.getCountriesByContinent(this.continent);
    
  }
  setContinentAsia(){
    this.continent = 'Asia'
    this.apiService.getCountriesByContinent(this.continent);
  }
  setContinentEurope(){
    this.continent = 'Europe'
    this.apiService.getCountriesByContinent(this.continent);
  }
  setContinentAustralia(){
    this.continent = 'Oceania'
    this.apiService.getCountriesByContinent(this.continent);
  }
  

  ngOnInit(): void {
  }

}
