import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database'
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  //to save user data into a collection//
  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
}
