import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from '../models/countryDTO';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountryService } from '../utils/country.service';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  listCountries: Partial<Country>[] = [];

  constructor(
    private httpCountries: CountriesService,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.httpCountries.getCountriesList().subscribe({
      next: (res) => {
        this.listCountries = res;
      },
      error: (err) => {
        console.error("Errore nel recupero dei dati:", err);
      }
    });
  }

  detailsCountry(country: Partial<Country>) {
    this.countryService.selectCountry(country as Country);
    this.router.navigate(['/country-details']);
  }
  
}
