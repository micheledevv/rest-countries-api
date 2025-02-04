import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from '../models/countryDTO';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries-list',
  standalone:true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  constructor(private httpCountries: CountriesService, private router: Router){

  }

  listCountries:Partial<Country>[]= [];

  ngOnInit() {
    this.httpCountries.getCountriesList().subscribe({
      next: (res) => {  
        // console.log(res);
        this.listCountries = res;  
        // console.log('lista:', this.listCountries);
      },
      error: (err) => {
        console.error("Errore nel recupero dei dati:", err);
      }
    });
  }

  detailsCountry(){
    console.log("vado")
    this.router.navigate(['country-details'])

  }
  


}
