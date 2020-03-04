import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Product } from 'src/app/model/product'
import { ProductService } from 'src/app/product.service'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.sass']
})
export class AdminProductsComponent implements OnInit {

  products : Product[]
  subscription : Subscription
  constructor(private productService: ProductService) {
    this.productService.getAll()
  }

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
