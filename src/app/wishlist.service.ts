import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WishListService {
    static GetWishList() {
      
    }

    constructor() { }

    wishlist = [];

    addToWishList(product) {

        this.wishlist.push(product);
    }

    getWishList() {

        return this.wishlist;
    }

    clearWishList() {

        this.wishlist = [];
        return this.wishlist;
    }
}
