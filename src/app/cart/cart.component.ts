import {CartService} from "./../cart.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls : ["./cart.component.scss"]
})

export class CartComponent implements OnInit{
    items;
    constructor(
        private cartServices: CartService
    ){ 
        this.items = this.cartServices.getItems()
    }

    ngOnInit() {  }
    
}