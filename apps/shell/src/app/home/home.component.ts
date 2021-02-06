import { Component, OnInit } from '@angular/core'
import { AuthService } from '@she/auth-lib'

@Component({
  selector: 'she-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.login('Demo-User', null)
  }
}
