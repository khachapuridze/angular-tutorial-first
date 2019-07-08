import {CartService} from "./../cart.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

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

        this.checkedForm = formBuilder.group({
            name: ['', [Validators.minLength(4), this.forbiddenName()]],
            address: formBuilder.group({
                street: '',
                city: '',
                state: '',
                zipCode: ''
            },{
                validators: this.crossValidation
            })
        });
    }

    crossValidation(formGroup){

        const zip = formGroup.get('zipCode').value;
        const zipStatus = CartComponent.isZipOk(zip);

        const city = formGroup.get('city').value;
        const cityStatus = CartComponent.isCityOk(city);

        return  zipStatus  && cityStatus ? null : {
            zipStatus,
            cityStatus
        };
    }

    static isZipOk(zip){
        return zip.length < 3;
    }

    static isCityOk(city){
        return city.charAt(0).toLowerCase === 'a';
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

    get address(){
        return this.checkedForm.get('address') as FormGroup;
    }

    ngOnInit() {  }
    
}