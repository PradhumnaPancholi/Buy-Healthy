import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  create(){
    console.log('form sc service')
    return this.db.list('/shooping-carts/').push({
      dateCreated: new Date().getTime()
    })
  }
}
