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
  filteredProducts: Product[]
  productsSubscription : Subscription
  categories$
  category: string

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) {
      //getting aall categoris//
      this.categories$ = this.categoryService.getCategories()
      //getting all products//
      this.productsSubscription =  this.productService.getAll().subscribe(data => {
        this.products = data.map(e => {
            return {
              id: e.payload.key,
              ...e.payload.toJSON()
            } as Product;
        });
        // getting selected categories//
        return route.queryParamMap.subscribe(params  => {
          this.category = params.get('category')
          console.log('selected category', this.category)
        //filtering products for given category//
          this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category.toLowerCase()) :
          this.products;
          console.log('filtered: ', this.filteredProducts)
        })
      })
  }

  ngOnInit(){

  }

  ngOnDestroy(){
    this.productsSubscription.unsubscribe()
  }

}
