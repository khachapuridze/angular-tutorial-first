import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';
import { exchangeCurrency } from './exchange/exchangeCurrency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AdminGuard } from './admin.guard';

import { formsComponent } from './forms/forms.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    WishlistComponent,
    ShippingComponent,
    CurrencyComponent,
    exchangeCurrency,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
    BreadcrumbsComponent,
    AdminComponent,
    GuardComponent,
    formsComponent,
    UsersComponent,
    LoginComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '', data:{name: 'Home'}, component: ProductListComponent
    },
    {
      path: 'products/:productId', data:{name: 'Product'},component: ProductDetailsComponent
    },
    {
      path: 'cart',data:{name: 'Cart'}, component: CartComponent
    },
    {
      path: 'wishlist',data:{name: 'Wishlist'}, component: WishlistComponent
    },
    { path: 'shipping', data:{name: 'Shipping'},component: ShippingComponent },
    { path: 'currency', data:{name: 'Currency'}, component: CurrencyComponent },
    { path: 'exchange', data:{name: 'Exchange'}, component: exchangeCurrency },
    { path: 'dashboard', data:{name: 'Dashboard'},component: DashboardComponent },
    { path: 'dashboard/news', data:{name: 'News'},component: NewsComponent },
    { path: 'dashboard/news/:articleId', data:{name: 'Article'},component: ArticleComponent },
    { path: 'forms',data:{name: 'Forms'}, component: formsComponent },
    { path: 'users', data:{name: 'Users'}, component: UsersComponent },
    { path: 'login', data:{name: 'Login'}, component: LoginComponent },
    { path: 'error',data:{name: 'Error'}, component: ErrorComponent },
    { path: 'guard',data:{name: 'Guard'}, component: GuardComponent },
    { path: 'admin',data:{name: 'Admin'}, component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'employees',data:{name: 'Employees'}, component: EmployeesComponent },
    { path: '**', redirectTo: 'error' }
  ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
