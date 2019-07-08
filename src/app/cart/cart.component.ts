import {CartService} from "./../cart.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls : ["./cart.component.scss"]
})

export class CartComponent implements OnInit{
    items;
    checkedForm;

    constructor(
        private cartServices: CartService,
        private formBuilder: FormBuilder
    ){ 
        this.items = this.cartServices.getItems();

        this.checkedForm = this.formBuilder.group({
            name: ['', [Validators.minLength(4), this.forbiddenName()]],
            address: formBuilder.group({
                street: '',
                city: '',
                state: '',
                zipCode: ''
            })
        });
    }

    Remove(productId) {

       this.cartServices.Remove(productId);

    }

    onSubmit(value) {
        
        this.checkedForm.push(value);
    }

    resetForm() {
        this.checkedForm.reset();
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? { forbidden: { invalid: true } } : null;
        }
    }

    get name() {
        return this.checkedForm.get('name') as FormControl;
    }

    ngOnInit() {  }
    
}