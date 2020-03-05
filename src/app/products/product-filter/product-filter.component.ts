import { Component, Input, OnInit } from '@angular/core'
import { CategoryService } from 'src/app/category.service'

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.sass']
})
export class ProductFilterComponent implements OnInit {

  categories$
  @Input('category') category
  constructor(private categoryService: CategoryService,) {
    //getting aall categoris//
    this.categories$ = this.categoryService.getCategories()
  }

  ngOnInit(): void {
  }

}
