import { Component } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries-list',
  imports: [],
  standalone:true,
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.scss'
})
export class CountriesListComponent {
  constructor(private httpCountries: CountriesService){

  }

  ngOnInit(){
    this.httpCountries.getCountriesList().subscribe({
      next(res) {
        console.log(res)
          
      },
    })
  }


}
