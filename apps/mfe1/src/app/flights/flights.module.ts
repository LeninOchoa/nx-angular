import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { LazyComponent } from './lazy/lazy.component'
import { FlightsSearchComponent } from './flights-search/flights-search.component'

@NgModule({
  declarations: [LazyComponent, FlightsSearchComponent],
  imports: [CommonModule, RouterModule.forChild(FLIGHTS_ROUTES)],
})
export class FlightsModule {}
