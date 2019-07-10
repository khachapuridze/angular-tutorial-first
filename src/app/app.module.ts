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
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';
import { exchangeCurrency } from './exchange/exchangeCurrency.component';
import { ShippingService } from './shipping.service';

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
    exchangeCurrency
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
  ])
  ],
  providers: [ShippingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
