import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component'
import { SearchInputComponent } from './search-input/search-input.component';
import { CountriesListComponent } from './countries-list/countries-list.component';

@Component({
  selector: 'app-root',
  imports: [ NavComponent, SearchInputComponent, CountriesListComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restCountries';
}
