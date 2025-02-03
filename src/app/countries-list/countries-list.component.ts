import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from '../models/countryDTO';

@Component({
  selector: 'app-countries-list',
  imports: [],
  standalone:true,
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  constructor(private httpCountries: CountriesService){

  }

  listCountries:Partial<Country>[]= [];

  ngOnInit() {
    this.httpCountries.getCountriesList().subscribe({
      next: (res) => {  
        console.log(res);
        this.listCountries = res;  // Qui `this` si riferisce correttamente alla classe
        console.log('lista:', this.listCountries);
      },
      error: (err) => {
        console.error("Errore nel recupero dei dati:", err);
      }
    });
  }
  


}
