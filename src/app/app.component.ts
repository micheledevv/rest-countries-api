import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component'
import { SearchInputComponent } from './search-input/search-input.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { RouterModule,Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ NavComponent, SearchInputComponent, CountriesListComponent, RouterModule, CommonModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCountryDetailsPage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isCountryDetailsPage = event.url.includes('/country-details');
      }
    });
  }
}
