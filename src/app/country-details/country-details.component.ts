import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountryService } from '../utils/country.service';
@Component({
  selector: 'app-country-details',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent {
  constructor(private countryService: CountryService){

  }
    ngOnInit() {
      console.log('ciao')
      this.countryService.observableSubject.subscribe({
        next: (res) => {
          console.log('RESSSS',res);
        },
        error: (err) => {
          console.error("Errore nel ricevere i dati:", err);
        }
      });
    }
    

}
