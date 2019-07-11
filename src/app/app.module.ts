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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '', component: ProductListComponent
    },
    {
      path: 'products/:productId', component: ProductDetailsComponent
    },
    {
      path: 'cart', component: CartComponent
    },
    {
      path: 'wishlist', component: WishlistComponent
    },
    { path: 'shipping', component: ShippingComponent },
    { path: 'currency', component: CurrencyComponent },
    { path: 'exchange', component: exchangeCurrency },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/news', component: NewsComponent },
    { path: 'dashboard/news/:articleId', component: ArticleComponent },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: 'error' },

  ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
