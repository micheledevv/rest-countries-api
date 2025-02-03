import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CountryDetailsDTO } from '../models/countryDetailsDTO';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http:HttpClient
  ) { }

  getCountriesList(): Observable<Partial<CountryDetailsDTO>[]> {
    return this.http.get<Partial<CountryDetailsDTO>[]>("assets/data.json");
  }
  
}
