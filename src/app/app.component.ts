import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private userService: UserService, private auth: AuthService, router: Router){
    auth.currentUser$.subscribe(user => {
      if (!user) return
      //save user data into firestore collection//
      userService.save(user)

      //redirect to returnurl stored in local storage//
      let returnUrl = localStorage.getItem('returnUrl')
      if(!returnUrl) return

      localStorage.removeItem('removeUrl')
      router.navigateByUrl(returnUrl)
    })
  }
}
