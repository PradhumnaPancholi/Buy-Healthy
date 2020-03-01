import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  //for storing current user//
  currentUser: firebase.User

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.currentUser = user)
  }

  ngOnInit(): void {
  }

  logout(){
    this.afAuth.auth.signOut()
  }

}
