import 'rxjs/add/operator/take'

import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database'

import { Product } from './model/product'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId)
  }

  async addToCart(product: Product){
    console.log('from sc service')
    let cartId = await this.getOrCreateCartId()
    let selectedItem = this.getItem(cartId, product.id)
    let item$ = selectedItem.snapshotChanges()
    item$.take(1).subscribe( item => {
      selectedItem.update({product: product, quantity: 1})
    })
  }

  // async addToCart(product: Product){
  //   console.log('from sc servic')
  //   let cartId = await this.getOrCreateCartId()
  //   let item$ = this.getItem(cartId, product.id)
  //   item$.update({product: product, quantity: 1})
  // }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId)
  }

  private async getOrCreateCartId(){
    let cartId = localStorage.getItem('cartId')

    if (cartId) return cartId

    let result = await this.create()
    localStorage.setItem('cartId', result.key)
    return result.key.toString()
  }

  private create(){
    return this.db.list('/shooping-carts/').push({
      dateCreated: new Date().getTime()
    })
  }
}
