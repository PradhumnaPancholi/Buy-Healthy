import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestore } from '@angular/fire/firestore'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from 'src/environments/environment'

import { AdminAuthGuardService } from './admin-auth-guard.service'
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component'
import { AdminProductsComponent } from './admin/admin-products/admin-products.component'
import { ProductsFormComponent } from './admin/products-form/products-form.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthGuardService } from './auth-guard.service'
import { AuthService } from './auth.service'
import { CategoryService } from './category.service'
import { CheckOutComponent } from './check-out/check-out.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { MyOrderComponent } from './my-order/my-order.component'
import { NavbarComponent } from './navbar/navbar.component'
import { OrderSuccessComponent } from './order-success/order-success.component'
import { ProductsComponent } from './products/products.component'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
import { UserService } from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    AdminAuthGuardService,
    AuthGuardService,
    UserService,
    CategoryService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
