import { Component, OnInit } from '@angular/core'
import { CategoryService } from 'src/app/category.service'

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.sass']
})
export class ProductsFormComponent implements OnInit {

  categories;

  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getCategories()
  }

  ngOnInit(): void {
  }

}
