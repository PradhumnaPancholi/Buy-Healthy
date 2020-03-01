import { Component, OnInit } from '@angular/core'
import { CategoryService } from 'src/app/category.service'
import { ProductService } from 'src/app/product.service'

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.sass']
})
export class ProductsFormComponent implements OnInit {

  categories;
  tempCategories;

  constructor(private categoryService: CategoryService, private productService: ProductService) {
    this.categories = this.categoryService.getCategories();
    console.log('category observalble', this.categories);
  }

  ngOnInit(): void {
  }

  save(product){
    this.productService.create(product)
  }
}
