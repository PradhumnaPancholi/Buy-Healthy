import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //for storing current user//
  currentUser$: Observable<firebase.User>

  constructor(public afAuth: AngularFireAuth) {
    this.currentUser$ = afAuth.authState
  }

  login(){
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.auth.signOut()
  }
}
