import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  //for storing current user//
  currentUser$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this.currentUser$ = afAuth.authState
  }

  ngOnInit(): void {
  }

  logout(){
    this.afAuth.auth.signOut()
  }

}
