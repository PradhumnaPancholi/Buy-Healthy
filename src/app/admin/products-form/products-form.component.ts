import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CategoryService } from 'src/app/category.service'
import { ProductService } from 'src/app/product.service'

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.sass']
})
export class ProductsFormComponent implements OnInit {

  categories$
  product : {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.categories$ = this.categoryService.getCategories();
    //get id from url //
    let id = this.route.snapshot.paramMap.get('id')
    // if id exist, fetch product//
    if (id) {
      this.productService.get(id).subscribe(p => {
        console.log('p',p)
        this.product = p
      })
    }
  }

  ngOnInit(): void {
  }

  save(product){
    this.productService.create(product)
    this.router.navigateByUrl['/admin/products']
  }

}
