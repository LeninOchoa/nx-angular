import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { APP_ROUTES } from './app.routes'
import { FlightsModule } from './flights/flights.module'
import { AuthLibModule } from '@she/auth-lib'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FlightsModule,
    AuthLibModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
