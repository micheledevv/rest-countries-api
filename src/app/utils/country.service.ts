import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private subject = new BehaviorSubject<any>(null);  
  observableSubject = this.subject.asObservable(); 

  loadCountries(data: any) {
    this.subject.next(data);  
  }
}
