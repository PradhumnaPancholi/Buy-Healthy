import { Injectable } from '@angular/core'

import { AuthService } from './auth.service'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthService, private userService: UserService) { }

  // canActivate(): Observable<boolean>{
  //   return this.auth.currentUser$.pipe(
  //     switchMap(user => this.userService.get(user.uid))
  //   ).pipe(map(appUser => appUser.isAdmin))
  // }
}
