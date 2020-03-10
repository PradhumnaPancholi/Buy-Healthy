import { Component, Input, OnInit } from '@angular/core'

import { Product } from '../model/product'
import { ShoppingCartService } from '../shopping-cart.service'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product
  @Input('show-actions') showActions : boolean = true

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart(product: Product) {
  }

  ngOnInit(): void {
  }

}
