import { Component } from '@angular/core'
import { AuthService } from '../auth.service'

@Component({
  selector: 'she-user',
  templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css']
})
export class UserComponent {
  get userName(): string {
    return this.authService.userName
  }

  constructor(private authService: AuthService) {}

}
