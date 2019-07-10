import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable( {
    providedIn: "root"
})

export class CartService {
    
    constructor() {

    }
    items= [];
    addToCart(product) {
        this.items.push(product)
    }
    getItems() {
        return this.items;
    }

    Remove(productId){
        // delete this.items[productId];
        this.items.splice(productId,1);
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}
