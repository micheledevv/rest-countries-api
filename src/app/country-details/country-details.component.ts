import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { CountryService } from '../utils/country.service';
import { Country } from '../models/countryDTO';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CountryDetailsDTO } from '../models/countryDetailsDTO';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent implements OnDestroy {
  selectedCountry: any | null = null;
  private subscription!: Subscription;

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit() {
    this.subscription = this.countryService.selectedCountry$.subscribe({
      next: (country) => {
       
          this.selectedCountry = country;
  
          console.log('Paese selezionato:', country);
         
        
      },
      error: (err) => {
        console.error("Errore nel ricevere i dati:", err);
      },
      
    });
  }

  goBack(){
    this.router.navigate(['/'])
    console.log("click indietro")

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
