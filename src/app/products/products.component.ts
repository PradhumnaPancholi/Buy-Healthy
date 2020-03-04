import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

import { CategoryService } from '../category.service'
import { Product } from '../model/product'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[]
  productsSubscription : Subscription
  categories$
  category: string

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) {
      this.categories$ = this.categoryService.getCategories()

      //getting selected catgory//
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category')
        console.log('selectd category', this.category)
      })
  }

  ngOnInit(){
    this.productsSubscription =  this.productService.getAll().subscribe(data => {
      this.products = data.map(e => {
          return {
            id: e.payload.key,
            ...e.payload.toJSON()
          } as Product;
      });
    });
  }

  ngOnDestroy(){
    this.productsSubscription.unsubscribe()
  }

}
