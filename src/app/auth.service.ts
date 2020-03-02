import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { AppUser } from './model/app-user'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //for storing current user//
  currentUser$: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth, public userService: UserService) {
    this.currentUser$ = afAuth.authState
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.auth.signOut()
  }

  get appUser$(): Observable<AppUser> {
    return this.currentUser$.pipe(
      switchMap(user => this.userService.get(user.uid).valueChanges())
    )
  }
}
