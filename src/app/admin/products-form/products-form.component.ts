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
  id

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.categories$ = this.categoryService.getCategories();
    //get id from url //
    this.id = this.route.snapshot.paramMap.get('id')
    // if id exist, fetch product//
    if (this.id) {
      this.productService.get(this.id).subscribe(p => {
        this.product = p
      })
    }
  }

  ngOnInit(): void {
  }

  save(product){
    //if id exists, update//
    if(this.id) this.productService.update(this.id, product)
    //else create/add new product//
    else this.productService.create(product)

    //redirect ot products page//
    this.router.navigate(['/admin/products'])
  }

  delete(){
    if(confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(this.id)
      //redirect ot products page//
      this.router.navigate(['/admin/products'])
    }
  }

}
