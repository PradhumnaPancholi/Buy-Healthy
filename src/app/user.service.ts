import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestoreDB: AngularFirestore) {
  }

  //to save user data into a collection//
  save(user: firebase.User){
    this.firestoreDB.doc('/users/'+user.uid).set({
      name: user.displayName,
      email: user.email
    })

    // this.firestoreDB.collection('users').add({
    //   name: user.displayName,
    //   email: user.email
    // })
  }
}
