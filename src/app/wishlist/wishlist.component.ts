import { Component, OnInit } from '@angular/core';
import { WishListService } from './../wishlist.service';
import {CartService} from "./../cart.service";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist;
  constructor(private wishListServise: WishListService, private cartService: CartService) {
    this.wishlist = this.wishListServise.getWishList();
  }

  ngOnInit() {
  }

  clearWishlist() {
    this.wishlist = [];
  }
  addToCart(product) {
    window.alert("your product has been added!")
    this.cartService.addToCart(product)
}
}