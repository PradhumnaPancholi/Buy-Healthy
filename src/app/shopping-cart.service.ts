import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  getOrCreate(){
    let cartID = localStorage.getItem('cartID')
    console.log('cardId', cartID)
    if (!cartID) {
      this.create().then(result => {
        localStorage.setItem('cartID', result.key)
      })
    }
  }

  create(){
    return this.db.list('/shooping-carts').push({
      dateCreated: new Date().getTime()
    })
  }
}
