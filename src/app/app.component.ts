import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private auth: AuthService, router: Router){
    auth.currentUser$.subscribe(user => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl')
        router.navigateByUrl(returnUrl)
      }
    })
  }
}
