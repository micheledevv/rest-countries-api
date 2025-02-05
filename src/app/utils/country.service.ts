import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../models/countryDTO';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private selectedCountrySubject = new BehaviorSubject<Country | null>(null);
  selectedCountry$ = this.selectedCountrySubject.asObservable();

  selectCountry(country: Country) {
    this.selectedCountrySubject.next(country);
  }
}
