import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { FlightsSearchComponent } from './flights-search/flights-search.component'
import { AuthLibModule } from '@she/auth-lib'

@NgModule({
  declarations: [FlightsSearchComponent],
  imports: [CommonModule, AuthLibModule, RouterModule.forChild(FLIGHTS_ROUTES)],
})
export class FlightsModule {}
