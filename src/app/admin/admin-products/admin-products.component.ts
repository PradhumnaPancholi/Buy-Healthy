import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Product } from 'src/app/model/product'
import { ProductService } from 'src/app/product.service'

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.sass']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products : Product[]
  filteredProducts: any[]
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

  //try different implementation for search - 'filteresdProducts' not in use//
  filter(query?: string){
    this.filteredProducts = (query)?
       this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
       this.products
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
