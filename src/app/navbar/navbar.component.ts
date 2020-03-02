import { Component, OnInit } from '@angular/core'

import { AuthService } from '../auth.service'
import { AppUser } from '../model/app-user'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  currentUser: AppUser
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.currentUser = appUser)
  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
  }

}
