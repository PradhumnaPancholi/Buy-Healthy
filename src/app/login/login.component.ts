import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor(private auth: AuthService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  login(){
    //get return url
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    //save into local storage//
    localStorage.setItem('returnUrl', returnUrl)

    this.auth.login()
  }
}
