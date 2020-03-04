import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { Product } from '../model/product'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products : Product[]
  subscription : Subscription

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.subscription = this.productService.getAll().subscribe(data => {
      this.products = data.map(e => {
          return {
            id: e.payload.key,
            ...e.payload.toJSON()
          } as Product;
      });
    });
  }

}
