import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { Country } from '../country/Model/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  
  keyWord: string = '';

  filteredCountriesByContinent:[]=[];

  countries$ : Observable<Array<Country>> | undefined

  
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.countries$ = this.api.getCountries(this.keyWord);
  }

  search(){
    this.countries$ = this.api.getCountries(this.keyWord);
  }

}


