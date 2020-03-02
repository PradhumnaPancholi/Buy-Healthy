import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'

import { AuthService } from './auth.service'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean>{
    return this.auth.currentUser$.pipe(
      switchMap(user => this.userService.get(user.uid).valueChanges()
      .pipe(map(appUser => appUser.isAdmin))
    ))}
    // return this.auth.currentUser$.pipe(
    //   switchMap(user => this.userService.get(user.uid).valueChanges()
    //   .pipe(map(appUser => appUser.isAdmin))
    // )}
}
