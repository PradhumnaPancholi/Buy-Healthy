import { Injectable } from '@angular/core'

import { AuthService } from './auth.service'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthService, private userService: UserService) { }


}
