import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from '../models/countryDTO';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  listCountries: Partial<Country>[] = [];
  isCountryDetailsPage = false;

  constructor(private httpCountries: CountriesService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCountryDetailsPage = event.url.includes('/country-details');
      }
    });
  }

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

  detailsCountry() {
    this.router.navigate(['/country-details']);
  }
}
