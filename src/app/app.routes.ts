import { Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: CountriesListComponent},
    { path: 'country-details', component: CountryDetailsComponent },
    { path: '**', component: PageNotFoundComponent }
];

